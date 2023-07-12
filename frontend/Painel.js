class Painel{
  constructor() {
    this.init()
  }

  init(){
    this.calc();
  }


  async calc(){

    const dados = await fetch('/api/modulos', {method:"POST"});
    const modulos = await dados.json();

    document.getElementById("PORCENTAGEM").onkeyup = ({target}) => {
      const {value} = target;
      const exclu = ['id',"createdAt","updatedAt",'PORCENTAGEM'];

      modulos.arr.forEach(e => {
        if(exclu.includes(e)) return;
        const element = document.getElementById(e);
        element.value = ((modulos.modulo[e] * parseFloat(value)) + modulos.modulo[e]).toFixed(2);

      });
    }
  }
}

new Painel();
