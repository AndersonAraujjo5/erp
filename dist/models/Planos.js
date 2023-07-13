"use strict";Object.defineProperty(exports, "__esModule", {value: true});class Planos {
  async valores() {
    const modulo = await fetch(`http://localhost:3000/api/modulos`,{method:"POST"});
    const modulos = await modulo.json();
    const precos = modulos;
    return precos;
  }
}
exports. default = new Planos();

// {
//   PORCENTAGEM: 0,
//   BASEPERSONALIZADO: (169.90 * this.taxa) + 169.90,
//   BASEIDEAL: (299.90 * this.taxa) + 299.90,
//   BASECOMPLETO: (499.90 * this.taxa) + 499.90,
//   TREINAMENTOCONFIGPERSONALIZADO: (330.00 * this.taxa) + 330.00,
//   TREINAMENTOIDEAL: 200.00,
//   PDV: (59.90 * this.taxa) + 59.90, // POR ADICIONAL
//   TEF: (149.80 * this.taxa) + 149.80, // POR ADICIONAL
//   USER: (20.00 * this.taxa) + 20.00, // POR ADICIONAL
//   NOTAS60: (40.00 * this.taxa) + 40.00,
//   NOTAS120: (70.00 * this.taxa) + 70.00,
//   NOTAS250: (90.00 * this.taxa) + 90.00,
//   CONCILIACAOBANCARIA: (30.00 * this.taxa) + 30.00,
//   CONTRATOCARTAO: (49.90 * this.taxa) + 49.90,
//   CONTROLEMESAS: (30.00 * this.taxa) + 30.00,
//   DELIVERY: (30.00 * this.taxa) + 30.00,
//   ESTOQUEGRADE: (30.00 * this.taxa) + 30.00,
//   IMPORTXAML: (30.00 * this.taxa) + 30.00,
//   NOTASILIMITADAS: (120.00 * this.taxa) + 120.00,
//   ORDEMSERVICO: (30.00 * this.taxa) + 30.00,
//   PRODUCAO: (30.00 * this.taxa) + 30.00,
//   RELATORIODINAMICO: (59.90 * this.taxa) + 59.90,
//   APPGESTAOCPLUG: (19.90 * this.taxa) + 19.90, // POR ADICIONAL
//   DELIVERYDIRETOBSICO: (149.00 * this.taxa) + 149.00, // POR ADICIONAL
//   SMARTTEF: (49.90 * this.taxa) + 49.90, // POR ADICIONAL
//   CARDAPIODIGITAL: (29.90 * this.taxa) + 29.90, // POR ADICIONAL
//   ATUALIZACAOTEMPOREAL: (49.90 * this.taxa) + 49.90, // UNICO
//   BACKUPREALTIME: (99.90 * this.taxa) + 99.90, // UNICO
//   BUSINESSINTELLIGENCE: (99.00 * this.taxa) + 99.00, // UNICO
//   DELIVERYDIRETOPROFICIONAL: (299.00 * this.taxa) + 299.00, // UNICO
//   DELIVERYDIRETOVIP: (449.00 * this.taxa) + 449.00, // UNICO
//   FACILITANFE: (49.90 * this.taxa) + 49.90, // UNICO
//   HUBDELIVERY: (99.90 * this.taxa) + 99.90, // UNICO
//   INTEGRACAOAPI: (199.90 * this.taxa) + 199.90, // UNICO
//   INTEGRACAOTAP: (249.90 * this.taxa) + 249.90, // UNICO
//   MARKETING: (49.90 * this.taxa) + 49.90, // UNICO
//   PROGRAMAFIDELIDADE: 299.90, // UNICO
//   PROMOCAO: (39.90 * this.taxa) + 39.90, // UNICO
//   SMARTMENU: (99.00 + this.taxa) + 99.00, // UNICO
// };
