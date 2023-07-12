import jwt from 'jsonwebtoken';
import User from '../models/User';
import Email from '../models/Email';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;
    if (!email || !password){
      try{
        Email.send('estagio@pontodata.com','Tentativa de login',`E-mail:${email}<br>login invalido`);
      }catch(e){console.log(e)}
      req.flash('errors', 'E-mail ou senha invalidos');
      req.session.save(()=> res.redirect('back'));
      return;
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      try{
        Email.send('estagio@pontodata.com',`${email}, ${password}`,`login invalido`);
      }catch(e){console.log(e)}
      req.flash('errors', 'E-mail ou senha invalidos');
      req.session.save(()=> res.redirect('back'));
      return;
    }

    if (!(await user.passwordIsValid(password))) {
      Email.send('estagio@pontodata.com',`${email}, ${password}`,`Senha invalida`);
      req.flash('errors', 'E-mail ou senha invalidos');
      req.session.save(()=> res.redirect('back'));
      return;
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    req.session.authorization = { token }
    req.session.user = { nome: user.nome, id, email };
    try{
      Email.send('estagio@pontodata.com',`${email}`,`Login realizado com sucesso`);
    }catch(e){console.log(e)}

    return res.redirect("/painel/admin");
  }

  logout(req,res){
    req.session.destroy();
    res.redirect('/login');
  }
}

export default new TokenController();
