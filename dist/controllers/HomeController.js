"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Planos = require('../models/Planos'); var _Planos2 = _interopRequireDefault(_Planos);
var _template = require('./template'); var _template2 = _interopRequireDefault(_template);
var _Modulo = require('../models/Modulo'); var _Modulo2 = _interopRequireDefault(_Modulo);
var _Cliente = require('../models/Cliente'); var _Cliente2 = _interopRequireDefault(_Cliente);
var _Email = require('../models/Email'); var _Email2 = _interopRequireDefault(_Email);

const attributes = () =>{
  return [
    "NOMERESPONSAVEL",
    "RASAOSOCIAL",
    "TELEFONE",
    "CPFCNPJ",
    "NOMEFANTASIA",
    "MODULO",
    "EMAIL",
    "BASEPERSONALIZADO",
    "BASEIDEAL",
    "BASECOMPLETO",
    "TREINAMENTOCONFIGPERSONALIZADO" ,
    "TREINAMENTOIDEAL",
    "PDV",
    "TEF",
    "USER",
    "NOTAS60",
    "NOTAS120",
    "NOTAS250",
    "CONCILIACAOBANCARIA",
    "CONTRATOCARTAO",
    "CONTROLEMESAS",
    "DELIVERY",
    "ESTOQUEGRADE",
    "IMPORTXAML",
    "NOTASILIMITADAS",
    "ORDEMSERVICO",
    "PRODUCAO",
    "RELATORIODINAMICO",
    "APPGESTAOCPLUG",
    "DELIVERYDIRETOBSICO",
    "SMARTTEF",
    "CARDAPIODIGITAL",
    "ATUALIZACAOTEMPOREAL",
    "BACKUPREALTIME",
    "BUSINESSINTELLIGENCE",
    "DELIVERYDIRETOPROFICIONAL",
    "DELIVERYDIRETOVIP",
    "FACILITANFE",
    "HUBDELIVERY",
    "INTEGRACAOAPI",
    "INTEGRACAOTAP",
    "MARKETING",
    "PROGRAMAFIDELIDADE",
    "PROMOCAO",
    "SMARTMENU"
    ];
}

class HomeController {
  async home(req, res) {
    try{
      const {modulo} = await _Planos2.default.valores();
      res.render('index', { precos:modulo });

    }catch(e){
      res.send(e)
    }

  }

  login(req, res) {
    const {authorization} = req.session;
    if(authorization){
      res.redirect("/painel/admin")
    }
    res.render('login')
  }

  async email(req, res) {
    const arr = [];
    const obj = {};
    for (let a in req.body) {
      arr.push(a);
      if(req.body[a].qtd){
        obj[a] = req.body[a].qtd;
      }else if(!req.body[a].qtd){
        if(req.body[a].qtd === undefined){
          obj[a] = req.body[a];
        }else{
          obj[a] = req.body[a].qtd;
        }
      }

    }
    arr.sort();

   try{
    await _Cliente2.default.create(obj);
   }catch(e){
    console.log(e)
   }


    const html = _template2.default.call(void 0, arr, req.body);
    try{
      _Email2.default.send("estagio@pontodata.com",'Candidatos ConnectPlug',html);
    }catch(e) {console.log(e)}
    return;
  }

  async painel(req, res) {
    try {
      const modulos = await _Modulo2.default.findByPk(process.env.FIND);
      const modulo = await modulos.toJSON();
      const arr = [];
      for (let a in modulo) {
        arr.push(a);
      }
      console.clear();
      res.render("painel", {arr, modulo, user:req.session.user})
    } catch (e) {
      console.log(e);
      res.render("painel");
    }
  }

  async clientes(req,res){
    let {page = 1, qtd = 20} = req.query;
    page = parseInt(page);
    qtd = parseInt(qtd)

    const findAll = (await _Cliente2.default.findAll()).slice((page*qtd)-qtd,page*qtd);
    const modulo = attributes();
    res.render("clientes", {clientes:findAll, user:req.session.user, modulo })
  }


}

exports. default = new HomeController();
