"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

exports. default = async (req, res, next) => {

  const  {authorization}  = req.session;

  if (!authorization) {
    req.flash('error', 'E-mail ou senha invalidos');
    req.session.save(()=> res.redirect('back'));
    return;
  }

  const {token} = authorization;

  try {
    const dados = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const user = await _User2.default.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      req.flash('error', 'E-mail ou senha invalidos');
      req.session.save(()=> res.redirect('back'));
      return;
    }
    return next();
  } catch (e) {
    req.flash('error', 'Realize o login');
    req.session.save(()=> res.redirect('back'));
    return;
  }
};
