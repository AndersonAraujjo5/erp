"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Modulo = require('../models/Modulo'); var _Modulo2 = _interopRequireDefault(_Modulo);
require("dotenv").config();
class ApiController{
  async store(req, res){
    try{
      const find = await _Modulo2.default.findByPk(process.env.FIND);
      const update = find.update(req.body);
      res.redirect('/painel/admin')
    }catch(e){
      console.log(e)
      res.redirect('/painel/admin');
    }

  }

  async create(req, res){
    try{
      const find = await _Modulo2.default.create(req.body);
      res.redirect('/painel/admin')
    }catch(e){
      console.log(e)
      res.redirect('/painel/admin');
    }

  }

  async index(req,res){
    try {
      const modulos = await _Modulo2.default.findByPk(process.env.FIND);
      const modulo = await modulos.toJSON();
      const arr = [];
      for (let a in modulo) {
        arr.push(a);
      }

      console.clear();
      res.json({arr, modulo})
    } catch (e) {
      console.log(e);
      res.json("error");
    }
  }
}

exports. default = new ApiController();
