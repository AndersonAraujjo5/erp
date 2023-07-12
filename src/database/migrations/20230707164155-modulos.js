'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable("Modulos", {
      ID: {
        type: Sequelize.INTEGER,
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
      },
      PORCENTAGEM: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      BASEPERSONALIZADO: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      BASEIDEAL: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      BASECOMPLETO: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      TREINAMENTOCONFIGPERSONALIZADO: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      TREINAMENTOIDEAL: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      PDV: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      TEF: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      USER: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      NOTAS60: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      NOTAS120: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      NOTAS250: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      CONCILIACAOBANCARIA: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      CONTRATOCARTAO: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      CONTROLEMESAS: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      DELIVERY: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      ESTOQUEGRADE: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      IMPORTXAML: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      NOTASILIMITADAS: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      ORDEMSERVICO: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      PRODUCAO: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      RELATORIODINAMICO: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      APPGESTAOCPLUG: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      DELIVERYDIRETOBSICO: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      SMARTTEF: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      CARDAPIODIGITAL: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      ATUALIZACAOTEMPOREAL: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      BACKUPREALTIME: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      BUSINESSINTELLIGENCE: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      DELIVERYDIRETOPROFICIONAL: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      DELIVERYDIRETOVIP: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      FACILITANFE: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      HUBDELIVERY: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      INTEGRACAOAPI: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      INTEGRACAOTAP: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      MARKETING: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      PROGRAMAFIDELIDADE: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      PROMOCAO: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      SMARTMENU: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
