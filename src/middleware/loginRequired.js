import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {

  const  {authorization}  = req.session;

  if (!authorization) {
    req.flash('error', 'E-mail ou senha invalidos');
    req.session.save(()=> res.redirect('back'));
    return;
  }

  const {token} = authorization;

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const user = await User.findOne({
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
