"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _Email = require('../models/Email'); var _Email2 = _interopRequireDefault(_Email);

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;
    if (!email || !password){
      try{
        _Email2.default.send('estagio@pontodata.com','Tentativa de login',`E-mail:${email}<br>login invalido`);
      }catch(e){console.log(e)}
      req.flash('errors', 'E-mail ou senha invalidos');
      req.session.save(()=> res.redirect('back'));
      return;
    }

    const user = await _User2.default.findOne({ where: { email } });

    if (!user) {
      try{
        _Email2.default.send('estagio@pontodata.com',`${email}, ${password}`,`login invalido`);
      }catch(e){console.log(e)}
      req.flash('errors', 'E-mail ou senha invalidos');
      req.session.save(()=> res.redirect('back'));
      return;
    }

    if (!(await user.passwordIsValid(password))) {
      _Email2.default.send('estagio@pontodata.com',`${email}, ${password}`,`Senha invalida`);
      req.flash('errors', 'E-mail ou senha invalidos');
      req.session.save(()=> res.redirect('back'));
      return;
    }

    const { id } = user;
    const token = _jsonwebtoken2.default.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    req.session.authorization = { token }
    req.session.user = { nome: user.nome, id, email };
    try{
      _Email2.default.send('estagio@pontodata.com',`${email}`,`Login realizado com sucesso`);
    }catch(e){console.log(e)}

    return res.redirect("/painel/admin");
  }

  logout(req,res){
    req.session.destroy();
    res.redirect('/login');
  }
}

exports. default = new TokenController();
