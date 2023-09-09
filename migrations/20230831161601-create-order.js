'use strict';
const customer=require('../models/customer');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order', {
      order_id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    cust_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references:{
        model:'customer',
        key:'cust_id'
      },
      onUpdate:"CASCADE",
      onDelete:"CASCADE"
    },
      invoice_creation_data:{
            type:Sequelize.DATE,
            allowNull:false
        },
      delivery_due_date:{
        type:Sequelize.DATE,
        allowNull:false
    },
      payment_due_date:{
        type:Sequelize.DATE,
        allowNull:false
    },
      customer_message:{
        type:Sequelize.STRING
    }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('order');
  }
};