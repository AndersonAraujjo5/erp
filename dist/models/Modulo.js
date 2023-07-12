"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Modulo extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      PORCENTAGEM: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0.0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      BASEPERSONALIZADO: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      BASEIDEAL: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      BASECOMPLETO: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      TREINAMENTOCONFIGPERSONALIZADO: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      TREINAMENTOIDEAL: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      PDV: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      TEF: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      USER: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      NOTAS60: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      NOTAS120: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      NOTAS250: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      CONCILIACAOBANCARIA: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      CONTRATOCARTAO: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      CONTROLEMESAS: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      DELIVERY: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      ESTOQUEGRADE: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      IMPORTXAML: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      NOTASILIMITADAS: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      ORDEMSERVICO: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      PRODUCAO: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      RELATORIODINAMICO: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      APPGESTAOCPLUG: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      DELIVERYDIRETOBSICO: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      SMARTTEF: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      CARDAPIODIGITAL: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      ATUALIZACAOTEMPOREAL: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      BACKUPREALTIME: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      BUSINESSINTELLIGENCE: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      DELIVERYDIRETOPROFICIONAL: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      DELIVERYDIRETOVIP: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      FACILITANFE: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      HUBDELIVERY: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      INTEGRACAOAPI: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      INTEGRACAOTAP: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      MARKETING: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      PROGRAMAFIDELIDADE: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      PROMOCAO: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      SMARTMENU: {
        type: _sequelize2.default.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
} exports.default = Modulo;
