const {DataTypes}=require('sequelize');
const sequelize=require('../src/database');
const order=require('./order');
const prodcut=require('./product');
const order_product=sequelize.define('order_product',{
  order_product_id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    allowNull:false
  },
  order_id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    references:{
      model:order,
      key:'order_id'
    }
  },
  product_id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    references:{
      model:prodcut,
      key:'product_id'
    }
  },
  quantity:{
    type:DataTypes.INTEGER,
    allowNull:false
  }
},{
  tableName:'order_produc',
  timestamps:false
}
)
module.exports=order_product;