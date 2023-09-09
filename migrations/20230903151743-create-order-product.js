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
        references:{
          model:'order',
          key:'order_id'
        },
        onUpdate:"CASCADE",
        onDelete:"CASCADE"  
      },
      product_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'product',
          key:'product_id'
        },
        onUpdate:"CASCADE",
        onDelete:"CASCADE"
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