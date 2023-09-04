const { DataTypes } = require('sequelize');
const sequelize=require('../src/database');
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
module.exports=productModel