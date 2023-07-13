import Planos from "../src/models/Planos";

class CalcPlano {
  constructor() {
    this.personalizado = {};
    this.apps = ['appGestao', 'deliveryDiretoBasico', 'smartTEF',
      'cardapioDigital', 'box1', 'box2', 'box3', 'box4', 'box4', 'box5',
      'box6', 'box7', 'box8', 'box9', 'box10', 'box11', 'box12', 'box13']
    this.baseCompleto = ['pdvC', 'tefC', 'userC', 'notasFiscaisC',
      'conciliacaoBancariaC', 'contratosCartoesOutrosC',
      'controleMesasC', 'deliveryC', 'estoqueGradeC', 'imIortacaoXMLC',
      'notasFiscaisIlimitadasC', 'ordemServicoC', 'IroducaoC', 'relatorioDinamicoC', ...this.apps];
    this.baseIdeal = ['pdvI', 'tefI', 'userI', 'notasFiscaisI',
      'conciliacaoBancariaI', 'contratosCartoesOutrosI',
      'controleMesasI', 'deliveryI', 'estoqueGradeI', 'imIortacaoXMLI',
      'notasFiscaisIlimitadasI', 'ordemServicoI', 'IroducaoI', 'relatorioDinamicoI', ...this.apps];
    this.basePersonalizado = ['pdvP', 'tefP', 'userP', 'notasFiscaisP',
      'conciliacaoBancariaP', 'contratosCartoesOutrosP',
      'controleMesasP', 'deliveryP', 'estoqueGradeP', 'importacaoXMLP',
      'notasFiscaisIlimitadasP', 'ordemServicoP', 'producaoP', 'relatorioDinamicoP', ...this.apps];
    this.pacotes;
    this.init();
  }

  async getPrecos() {
    const { modulo } = await Planos.valores();
    delete modulo.id
    delete modulo.createdAt
    delete modulo.updatedAt;
    return modulo;
  }

  async init() {
    this.precos = await this.getPrecos();
    this.btnMoreLess();
    this.modulos(this.baseCompleto);
    this.modulos(this.baseIdeal);
    this.calcPersonalizado();
    this.btnModule();
    this.btnForm();
  }

  calcPersonalizado() {
    this.basePersonalizado.forEach(e => {
      const target = document.getElementById(e);
      if (!target) return;
      if (target.name == 'NOTASFISCAIS') {
        this.personalizado[target.name] = { qtd: target.value ? parseInt(target.value) : 0, valor: this.calcNotas(target).valor }
        return;
      }
      this.personalizado[target.name] = { qtd: target.value ? parseInt(target.value) : 0, valor: this.precos[target.name] }
    })

    this.modulos(this.basePersonalizado);
  }

  modulos(inputs) {
    inputs.forEach(e => {
      const inputElement = document.getElementById(e);
      if (!inputElement) return;
      inputElement.onchange = () => {
        this.checkModules();
      }
    });
  }

  checkModules() {
    ['basePersonalizado', 'baseIdeal', 'baseCompleto'].forEach(element => {
      switch (element) {
        case "basePersonalizado":
          this.calcular(this.precos.BASEPERSONALIZADO - this.precos.PDV - this.precos.USER, element, this.basePersonalizado);
          break;
        case "baseIdeal":
          this.calcular(this.precos.BASEIDEAL - this.precos.PDV - (this.precos.USER * 5), element, this.baseIdeal);
          break;
        case "baseCompleto":
          this.calcular(this.precos.BASECOMPLETO - (this.precos.PDV * 2) - (this.precos.USER * 20), element, this.baseCompleto);
          break;
      }
    });
  }

  calcular(total, eBase, inputs) {

    const valorPer = document.getElementById(eBase);

    inputs.forEach(elem => {
      const elementos = document.getElementById(elem);

      if (!elementos) return;
      this.validate(elementos)
      if (elementos.name == "NOTASFISCAIS") {
        const notas = this.calcNotas(elementos);
        this.personalizado[elementos.name] = { qtd: elementos.value ? parseInt(elementos.value) : 0, valor: notas.valor }
        total = total + (this.personalizado[elementos.name].valor)
        document.getElementById('qtdNotas').textContent = notas.qtd;
        return;
      }


      this.personalizado[elementos.name] = { qtd: elementos.value ? parseInt(elementos.value) : 0, valor: this.precos[elementos.name] }
      total = total + (this.personalizado[elementos.name].qtd * this.personalizado[elementos.name].valor)

      if (elementos.type === "checkbox") {
        if (elementos.checked) {
          this.personalizado[elementos.name] = { qtd: 1, valor: this.precos[elementos.name] }
          total = total + (this.personalizado[elementos.name].qtd * this.personalizado[elementos.name].valor)
          return;
        }

        this.personalizado[elementos.name] = { qtd: 0, valor: this.precos[elementos.name] }
        total = total + (this.personalizado[elementos.name].qtd * this.personalizado[elementos.name].valor)
      }
    })
    valorPer.textContent = total.toFixed(2).replace(".", ",");

  }

  ifBaseValues(idElement) {
    let total = 0;
    let eBase = "";

    if (this.baseIdeal.includes(idElement)) {
      total = this.precos.BASEIDEAL - this.precos.PDV - (this.precos.USER * 5);
      eBase = "baseIdeal";
    } else if (this.basePersonalizado.includes(idElement)) {
      total = this.precos.BASEPERSONALIZADO - this.precos.PDV - this.precos.USER;
      eBase = "basePersonalizado";
    } else if (this.baseCompleto.includes(idElement)) {
      total = this.precos.BASECOMPLETO - (this.precos.PDV * 2) - (this.precos.USER * 20);
      eBase = "baseCompleto";
    }

    return { total, eBase };
  }

  calcNotas(target) {
    let v = 0;
    let n = 0;
    switch (parseInt(target.value)) {
      case 1:
        v = 40.00;
        n = 60;
        break
      case 2:
        v = 70.00;
        n = 120;
        break;
      case 3:
        v = 90.00;
        n = 250;
        break
    }
    return { valor: v, qtd: n };
  }

  validate(target) {
    const ifApps = ['appGestao', 'deliveryDiretoBasico', 'smartTEF', 'cardapioDigital', 'tefP', 'tefI', 'tefC'];
    const v1 = ['pdvP', 'pdvI', 'userP'];
    // const teste = ['userI', 'pdvC', 'pdvC', ...ifApps, ...v1]
    // if (!teste.includes(target.id)) return;
    if (ifApps.includes(target.id)) {
      this.validar(target, 0);
    } else if (v1.includes(target.id)) {
      this.validar(target, 1);
    } else if (target.id === 'userI') {
      this.validar(target, 5);
    } else if (target.id === 'pdvC') {
      this.validar(target, 2);
    } else if (target.id === 'userC') {
      this.validar(target, 20);
    }
  }

  validar(e, min) {
    if (e.value < min) {
      e.value = min;
    }
  }

  btnMoreLess(e) {
    const a = document.querySelectorAll('input[type=button]');
    a.forEach(e => {
      e.onclick = ({ target }) => {
        const { attributes } = target;

        if (attributes.btnmore) {
          document.getElementById(attributes.btnmore.value).value++;
          this.checkModules();
        } else if (attributes.btnless) {
          document.getElementById(attributes.btnless.value).value--;
          this.checkModules();
        }
      }
    })
  }

  btnModule() {
    document.getElementById('btnPersonalizado').onclick = () => {
      this.calcular(this.precos.BASEPERSONALIZADO - this.precos.PDV - this.precos.USER, 'basePersonalizado', this.basePersonalizado);
      this.pacotes = this.personalizado;
      this.pacotes.MODULO = "Personalizado"
    }
    document.getElementById('btnIdeal').onclick = () => {
      this.calcular(this.precos.BASEIDEAL - this.precos.PDV - (this.precos.USER * 5), 'baseIdeal', this.baseIdeal);
      this.pacotes = this.personalizado;
      this.pacotes.MODULO = "Ideal"
    }
    document.getElementById('btnCompleto').onclick = () => {
      this.calcular(this.precos.BASECOMPLETO - (this.precos.PDV * 2) - (this.precos.USER * 20), 'baseCompleto', this.baseCompleto);
      this.pacotes = this.personalizado;
      this.pacotes.MODULO = "Completo"
    }
  }

  btnForm() {
    const arr = ['nome_fantasia', 'rasao_social', 'cpf_cnpj', 'telefone',
      'email', 'nome_responsavel']
    document.getElementById('btnSend').onclick = (elemento) => {
      let check = true;
      arr.forEach(e => {
        const input = document.getElementById(e);
        input.onclick = (elem) => elem.target.style.borderColor = 'black'
        if (this.checkForms(input)) {
          const text = input.id.replace("_", "").toUpperCase();
          this.pacotes[text] = input.value;
          return;
        }
        check = false;
      })

      if (check) {
        elemento.preventDefault();
        const json = JSON.stringify(this.pacotes)
        const local = window.location.host;
        async function enviarDados() {
          await fetch(`http://localhost:3000/mail`, {
            method: "POST",
            body: json,
            headers: { "Content-type": "application/json;charset=UTF-8" }
          }).then(e => console.log(e))
        }
        enviarDados();

        location.href = this.generetText();
      }

    }
  }

  generetText() {
    const arr = [];
    for (let a in this.personalizado) {
      arr.push(a);
    }
    let text = '';
    arr.forEach(element => {
      if (this.personalizado[element].qtd !== 0) {
        switch (element) {
          case "PDV":
            text += ` com ${this.personalizado[element].qtd} PDV,`;
            break;
          case "TEF":
            text += ` ${this.personalizado[element].qtd} TEF,`;
            break;
          case "USER":
            text += ` ${this.personalizado[element].qtd} Usuários,`;
            break;
          case "CONCILIACAOBANCARIA":
            text += ` Conciliação Bancaria,`;
            break;
          case "CONTRATOCARTAO":
            text += ` Contrato de cartões,`;
            break;
          case "CONTROLEMESAS":
            text += ` Controle de mesas,`;
            break;
          case "DELIVERY":
            text += ` Delivery,`;
            break;
          case "IMPORTXAML":
            text += ` Importação de XML,`;
            break;
          case "NOTASILIMITADAS":
            text += ` Notas Fiscais Ilimitadas,`;
            break;
          case "ORDEMSERVICO":
            text += ` Ordem de serviço,`;
            break;
          case "PRODUCAO":
            text += ` Produção,`;
            break;
          case "RELATORIODINAMICO":
            text += ` Relatorio dinamico,`;
            break;
          case "APPGESTAOCPLUG":
            text += ` ${this.personalizado[element].qtd} App de Gentão,`;
            break;
          case "DELIVERYDIRETOBSICO":
            text += ` ${this.personalizado[element].qtd} Delivery direto basico,`;
            break;
          case "SMARTTEF":
            text += ` ${this.personalizado[element].qtd} SMART TEF,`;
            break;
          case "CARDAPIODIGITAL":
            text += ` ${this.personalizado[element].qtd} Cardapio Digital,`;
            break;
          case "ATUALIZACAOTEMPOREAL":
            text += ` Atualização em tempo real,`;
            break;
          case "BACKUPREALTIME":
            text += ` Backup Realtime,`;
            break;
          case "BUSINESSINTELLIGENCE":
            text += ` Business Intelligence,`;
            break;
          case "DELIVERYDIRETOPROFICIONAL":
            text += ` Delivery direto proficional,`;
            break;
          case "DELIVERYDIRETOVIP":
            text += ` Delivery VIP,`;
            break;
          case "FACILITANFE":
            text += ` Facilita NFE,`;
            break;
          case "HUBDELIVERY":
            text += ` Hub de Delivery,`;
            break;
          case "INTEGRACAOAPI":
            text += ` INtegração API,`;
            break;
          case "MARKETING":
            text += ` Marketing,`;
            break;
          case "PROGRAMAFIDELIDADE":
            text += ` Programa de Fidelidade,`;
            break;
          case "PROMOCAO":
            text += ` Promoção,`;
            break;
          case "SMARTMENU":
            text += ` Smart Menu,`;
            break;
        }
      }
    });

    let url = `https://api.whatsapp.com/send/?phone=559134624702&text=Olá, sou da empresa *${this.pacotes.NOMEFANTASIA}* e estou interessado no plano *${this.pacotes.MODULO}*, ${text.substring(0, text.length - 1)}. &type=phone_number&app_absent=0`
    return url;
  }

  checkForms(e) {
    let check = true;

    const condicao = (min = 3) => {
      if (e.value.length < min) {
        e.style.borderColor = "red";
        check = false;
      }
    }

    switch (e.id) {
      case 'nome_fantasia':
      case 'rasao_social':
      case 'nome_responsavel':
        condicao()
        break;
      case 'cpf_cnpj':
        condicao(11)
        break
      case 'telefone':
        condicao(11)
        break;
      case 'email':
        if (!e.value.includes('@') || !e.value.includes('.')) {
          e.style.borderColor = "red";
          check = false;
        }
    }
    return check;
  }


}


const planos = new CalcPlano();

const style = {
  styleBIgAtive: (a, b) => {
    a.forEach(e => {
      e.style = `position:fixed; top: 0; z-index:3;`
    })
    b.style.display = 'block';
  },
  styleDisable: (a, b) => {
    a.forEach(e => {
      e.style = `position:unse;top: 0;`
    })
    b.style.display = 'none';
  }
}

document.onscroll = () => {
  const a = document.querySelectorAll(".header-fixed");
  const b = document.getElementById("fluur");
  var posicaoy = window.pageYOffset;
  if (window.innerWidth > 768 && window.innerWidth < 992) {
    if (posicaoy >= 3480 && posicaoy <= 6200) {
      style.styleBIgAtive(a, b);
    } else {
      style.styleDisable(a, b)
    }
  } else if (window.innerWidth > 992) {
    if (posicaoy >= 3000 && posicaoy <= 5200) {
      style.styleBIgAtive(a, b);
    } else {
      style.styleDisable(a, b)
    }
  } else if (window.innerWidth < 768) {
    if (posicaoy >= 4000 && posicaoy <= 8900) {
      a.forEach((e, index) => {
        switch (index) {
          case 0:
            e.style = `position:fixed; top: 0; z-index:3;right:68.6%; padding:0; border:none`;
            break;
          case 1:
            e.style = `position:fixed; top: 0; z-index:3;right:33.3%;padding:0; border:none`;
            break;
          case 2:
            e.style = `position:fixed; top: 0; z-index:3;right:3%;padding:0; border:none`;
            break;
        }
      })
      b.style.display = 'block';
    } else {
      a.forEach((e, index) => {
        switch (index) {
          case 0:
            e.style = `position:unsed; top: 0; z-index:1;`;
            break;
          case 1:
            e.style = `position:unsed; top: 0; z-index:1;`;
            break;
          case 2:
            e.style = `position:unsed; top: 0; z-index:1;`;
            break;
        }
      })
      b.style.display = 'none';
    }
  } else if (window.innerWidth < 577) {
    if (posicaoy >= 4000 && posicaoy < 15000) {
      a.forEach((e, index) => {
        switch (index) {
          case 0:
            e.style = `position:fixed; top: 0; z-index:3;right:68.6%; padding:0; border:none`;
            break;
          case 1:
            e.style = `position:fixed; top: 0; z-index:3;right:33.3%;padding:0; border:none`;
            break;
          case 2:
            e.style = `position:fixed; top: 0; z-index:3;right:3%;padding:0; border:none`;
            break;
        }
      })
      b.style.display = 'block';
    }
  }

};


class Mascara {
  constructor() {
    this.init();
  }

  init() {
    this.maskCPFCPNJ();
    this.maskTelefone();
  }

  maskCPFCPNJ() {
    const input = document.getElementById("cpf_cnpj");
    input.onkeyup = ({ target }) => {
      const value = target.value.replace(/\D/g, '');
      target.value = value;
      if (value.length > 3 && value.length < 7) target.value = `${value.substr(0, 3)}.${value.substr(3, 3)}`
      if (value.length > 7 && value.length < 10) target.value = `${value.substr(0, 3)}.${value.substr(3, 3)}.${value.substr(6, 3)}`
      if (value.length > 10 && value.length < 12) target.value = `${value.substr(0, 3)}.${value.substr(3, 3)}.${value.substr(6, 3)}-${value.substr(9, 2)}`
      if (value.length > 13) target.value = `${value.substr(0, 2)}.${value.substr(2, 3)}.${value.substr(5, 3)}/${value.substr(8, 4)}-${value.substr(12, 2)}`
    }
  }

  maskTelefone() {
    const input = document.getElementById("telefone");
    input.onkeyup = ({ target }) => {
      const value = target.value.replace(/\D/g, '');
      target.value = value;
      if (value.length > 3 && value.length < 7) target.value = `(${value.substr(0, 2)}) ${value.substr(2, value.length - 1)}`;
      if (value.length > 7) target.value = `(${value.substr(0, 2)}) ${value.substr(2, 5)}-${value.substr(7, 4)}`;
    }
  }
}

const b = new Mascara();


class Pesquisa {
  constructor() {
    this.init();
  }

  init() {
    this.pesquisa();
  }

  pesquisa() {
    const input = document.getElementById("inputBuscar");
    input.onkeyup = ({ target }) => {
      const { value } = target;

      async function buscar() {
        const api = await fetch(`https://pontodata.com/wp-json/wp/v2/posts?_embed=1&post_type=ct_forced_post&per_page=6&search=${value}`);
        const json = await api.json();

        const a = json.map(({ title, link, featured_image_urls, content }) => {
          return `
          <a href="${link}" class="card mb-3" style="border: 0;">
          <div class="row g-0 align-items-center">
            <div class="col-md-4">
              <img src="${featured_image_urls.thumbnail[0]}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${title.rendered}</h5>
                <p>${content.rendered.substr(0, 100)}...</p>
              </div>
            </div>
          </div>
        </a>
          `;
        })
        document.getElementById('box-pesquisa').innerHTML = '';
        a.forEach(e => {
          //  var elemento = document.createElement(e);
          document.getElementById('box-pesquisa').innerHTML += e;
        })
      }

      buscar();
    }
  }
}

const c = new Pesquisa();

