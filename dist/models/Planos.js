"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dominio = require('../dominio'); var _dominio2 = _interopRequireDefault(_dominio);
class Planos {
  async valores() {
    const modulo = await fetch(`${_dominio2.default}/api/modulos`,{method:"POST"});
    const modulos = await modulo.json();
    const precos = modulos;
    return precos;
  }
}
exports. default = new Planos();

