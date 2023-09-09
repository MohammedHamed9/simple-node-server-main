'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('customer', {
      cust_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate:{
          isEmail:true
        }
      },
      company: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      billing_street:{
        type:Sequelize.STRING,
        allowNull:false
      },
      billing_city:{
        type:Sequelize.STRING,
        allowNull:false
      },
      billing_state:{
        type:Sequelize.STRING,
        allowNull:false
      },
      billing_zip:{
        type:Sequelize.STRING,
        allowNull:false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('customer');
  },
};