const { DataTypes } = require('sequelize');
const sequelize=require('../src/database');
const customer=require('./customer');
const orderModel=sequelize.define('order',{
  order_id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
},
  cust_id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    references:{
    model:customer,
    key:'cust_id'
    }
},
  invoice_creation_data:{
        type:DataTypes.DATE,
        allowNull:false
    },
  delivery_due_date:{
    type:DataTypes.DATE,
    allowNull:false
},
  payment_due_date:{
    type:DataTypes.DATE,
    allowNull:false
},
  customer_message:{
    type:DataTypes.STRING
}
},{
  tableName:'order',
  timestamps:false
});
module.exports=orderModel