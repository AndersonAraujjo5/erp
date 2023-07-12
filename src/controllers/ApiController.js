import Modulo from '../models/Modulo';
require("dotenv").config();
class ApiController{
  async store(req, res){
    console.log(req.body)
    try{
      const find = await Modulo.create(req.body)
      // const find = await Modulo.findByPk(process.env.FIND);
      // const update = find.update(req.body);
      console.log(find)
      res.redirect('/painel/admin')
    }catch(e){
      console.log(e)
      res.redirect('/painel/admin');
    }

  }

  async index(req,res){
    try {
      const modulos = await Modulo.findByPk(process.env.FIND);
      const modulo = await modulos.toJSON();
      const arr = [];
      for (let a in modulo) {
        arr.push(a);
      }

      console.clear();
      res.json({arr, modulo})
    } catch (e) {
      //console.log(e);
      res.json("error");
    }
  }
}

export default new ApiController();
