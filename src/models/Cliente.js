import Sequelize, { Model } from 'sequelize';

export default class Cliente extends Model {
  static init(sequelize) {
    super.init({
      NOMERESPONSAVEL: {
        type: Sequelize.STRING,
        defaultValue:'',
      },
      RASAOSOCIAL: {
        type: Sequelize.STRING,
        defaultValue:'',
      },

      TELEFONE: {
        type: Sequelize.STRING,
        defaultValue:'',
      },
      CPFCNPJ: {
        type: Sequelize.STRING,
        defaultValue:'',
      },
      NOMEFANTASIA: {
        type: Sequelize.STRING,
        defaultValue:'',
      },
      MODULO: {
        type: Sequelize.STRING,
        defaultValue:'',
      },
      EMAIL: {
        type: Sequelize.STRING,
        defaultValue:'',
      },
      BASEPERSONALIZADO: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      BASEIDEAL: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      BASECOMPLETO: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      TREINAMENTOCONFIGPERSONALIZADO: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      TREINAMENTOIDEAL: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      PDV: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      TEF: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      USER: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      NOTAS60: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      NOTAS120: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      NOTAS250: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      CONCILIACAOBANCARIA: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      CONTRATOCARTAO: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      CONTROLEMESAS: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      DELIVERY: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      ESTOQUEGRADE: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      IMPORTXAML: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      NOTASILIMITADAS: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      ORDEMSERVICO: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      PRODUCAO: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      RELATORIODINAMICO: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      APPGESTAOCPLUG: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      DELIVERYDIRETOBSICO: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      SMARTTEF: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      CARDAPIODIGITAL: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      ATUALIZACAOTEMPOREAL: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      BACKUPREALTIME: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      BUSINESSINTELLIGENCE: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      DELIVERYDIRETOPROFICIONAL: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      DELIVERYDIRETOVIP: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      FACILITANFE: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      HUBDELIVERY: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      INTEGRACAOAPI: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      INTEGRACAOTAP: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      MARKETING: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      PROGRAMAFIDELIDADE: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      PROMOCAO: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        validate: {
          isFloat: {
            msg: 'O valor deve ser do tipo inteiro.',
          },
        },
      },
      SMARTMENU: {
        type: Sequelize.INTEGER,
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
}
