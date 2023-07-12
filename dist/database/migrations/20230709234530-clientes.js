"use strict";'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable("Clientes", {
      ID: {
        type: Sequelize.INTEGER,
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
      },

      NOMERESPONSAVEL: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      RASAOSOCIAL: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      TELEFONE: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      CPFCNPJ: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      NOMEFANTASIA: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      MODULO: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      EMAIL: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      BASEPERSONALIZADO: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      BASEIDEAL: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      BASECOMPLETO: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      TREINAMENTOCONFIGPERSONALIZADO: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      TREINAMENTOIDEAL: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      PDV: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      TEF: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      USER: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      NOTAS60: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      NOTAS120: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      NOTAS250: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      CONCILIACAOBANCARIA: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      CONTRATOCARTAO: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      CONTROLEMESAS: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      DELIVERY: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      ESTOQUEGRADE: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      IMPORTXAML: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      NOTASILIMITADAS: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      ORDEMSERVICO: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      PRODUCAO: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      RELATORIODINAMICO: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      APPGESTAOCPLUG: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      DELIVERYDIRETOBSICO: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      SMARTTEF: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      CARDAPIODIGITAL: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      ATUALIZACAOTEMPOREAL: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      BACKUPREALTIME: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      BUSINESSINTELLIGENCE: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      DELIVERYDIRETOPROFICIONAL: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      DELIVERYDIRETOVIP: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      FACILITANFE: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      HUBDELIVERY: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      INTEGRACAOAPI: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      INTEGRACAOTAP: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      MARKETING: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      PROGRAMAFIDELIDADE: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      PROMOCAO: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      SMARTMENU: {
        type: Sequelize.INTEGER,
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
