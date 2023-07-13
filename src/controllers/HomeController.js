import Planos from '../models/Planos';
import template from './template';
import Modulo from '../models/Modulo';
import Cliente from '../models/Cliente';
import Email from '../models/Email'

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
      const {modulo} = await Planos.valores();
      console.log(modulo)
      res.render('index', { precos:modulo });
    }catch(e){
      res.send('erro')
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
    await Cliente.create(obj);
   }catch(e){
    console.log(e)
   }


    const html = template(arr, req.body);
    try{
      Email.send("estagio@pontodata.com",'Candidatos ConnectPlug',html);
    }catch(e) {console.log(e)}
    return;
  }

  async painel(req, res) {
    try {
      const modulos = await Modulo.findByPk(process.env.FIND);
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

    const findAll = (await Cliente.findAll()).slice((page*qtd)-qtd,page*qtd);
    const modulo = attributes();
    res.render("clientes", {clientes:findAll, user:req.session.user, modulo })
  }


}

export default new HomeController();
