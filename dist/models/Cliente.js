"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Cliente extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      NOMERESPONSAVEL: {
        type: _sequelize2.default.STRING,
        defaultValue:'',
      },
      RASAOSOCIAL: {
        type: _sequelize2.default.STRING,
        defaultValue:'',
      },

      TELEFONE: {
        type: _sequelize2.default.STRING,
        defaultValue:'',
      },
      CPFCNPJ: {
        type: _sequelize2.default.STRING,
        defaultValue:'',
      },
      NOMEFANTASIA: {
        type: _sequelize2.default.STRING,
        defaultValue:'',
      },
      MODULO: {
        type: _sequelize2.default.STRING,
        defaultValue:'',
      },
      EMAIL: {
        type: _sequelize2.default.STRING,
        defaultValue:'',
      },
      BASEPERSONALIZADO: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      BASEIDEAL: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      BASECOMPLETO: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      TREINAMENTOCONFIGPERSONALIZADO: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      TREINAMENTOIDEAL: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      PDV: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      TEF: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      USER: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      NOTAS60: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      NOTAS120: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      NOTAS250: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      CONCILIACAOBANCARIA: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      CONTRATOCARTAO: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      CONTROLEMESAS: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      DELIVERY: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      ESTOQUEGRADE: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      IMPORTXAML: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      NOTASILIMITADAS: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      ORDEMSERVICO: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      PRODUCAO: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      RELATORIODINAMICO: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      APPGESTAOCPLUG: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      DELIVERYDIRETOBSICO: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      SMARTTEF: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      CARDAPIODIGITAL: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      ATUALIZACAOTEMPOREAL: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      BACKUPREALTIME: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      BUSINESSINTELLIGENCE: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      DELIVERYDIRETOPROFICIONAL: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      DELIVERYDIRETOVIP: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      FACILITANFE: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      HUBDELIVERY: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      INTEGRACAOAPI: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      INTEGRACAOTAP: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      MARKETING: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      PROGRAMAFIDELIDADE: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      PROMOCAO: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      SMARTMENU: {
        type: _sequelize2.default.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
} exports.default = Cliente;
