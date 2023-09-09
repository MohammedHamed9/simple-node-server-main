const { DataTypes } = require('sequelize');
const sequelize=require('../src/database');
const order=require('../models/order');
const order_product=require('../models/order_product')

const productModel=sequelize.define('product',{
  product_id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  description:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  price:{
    type:DataTypes.INTEGER,
    allowNull:false,
  }
},{
  tableName:'product',
  timestamps:false
});
productModel.associate=function(models){
    productModel.hasOne(models.order)
}
/*
productModel.belongsToMany(order,{through:order_product})*/
console.log('am herrrreeeeee')
module.exports=productModel