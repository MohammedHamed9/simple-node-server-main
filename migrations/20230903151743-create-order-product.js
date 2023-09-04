'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order_product', {
      order_product_id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      order_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
      },
      product_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
      },
      quantity:{
        type:Sequelize.INTEGER,
        allowNull:false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('order_product');
  }
};