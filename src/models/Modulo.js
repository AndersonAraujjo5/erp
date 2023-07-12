import Sequelize, { Model } from 'sequelize';

export default class Modulo extends Model {
  static init(sequelize) {
    super.init({
      PORCENTAGEM: {
        type: Sequelize.FLOAT,
        defaultValue:0.0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      BASEPERSONALIZADO: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      BASEIDEAL: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      BASECOMPLETO: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      TREINAMENTOCONFIGPERSONALIZADO: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      TREINAMENTOIDEAL: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      PDV: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      TEF: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      USER: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      NOTAS60: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      NOTAS120: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      NOTAS250: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      CONCILIACAOBANCARIA: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      CONTRATOCARTAO: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      CONTROLEMESAS: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      DELIVERY: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      ESTOQUEGRADE: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      IMPORTXAML: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      NOTASILIMITADAS: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      ORDEMSERVICO: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      PRODUCAO: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      RELATORIODINAMICO: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      APPGESTAOCPLUG: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      DELIVERYDIRETOBSICO: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      SMARTTEF: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      CARDAPIODIGITAL: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      ATUALIZACAOTEMPOREAL: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      BACKUPREALTIME: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      BUSINESSINTELLIGENCE: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      DELIVERYDIRETOPROFICIONAL: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      DELIVERYDIRETOVIP: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      FACILITANFE: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      HUBDELIVERY: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      INTEGRACAOAPI: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      INTEGRACAOTAP: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      MARKETING: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      PROGRAMAFIDELIDADE: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      PROMOCAO: {
        type: Sequelize.FLOAT,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro ou real.',
          },
        },
      },
      SMARTMENU: {
        type: Sequelize.FLOAT,
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
}
