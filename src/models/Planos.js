import dominio from "../dominio";
class Planos {
  async valores() {
    const modulo = await fetch(`${dominio}/api/modulos`,{method:"POST"});
    const modulos = await modulo.json();
    const precos = modulos;
    return precos;
  }
}
export default new Planos();

