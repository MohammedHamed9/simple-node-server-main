// src/models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../src/database');

const customerModel = sequelize.define('customer', {
  cust_id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fullName:{
    type:DataTypes.VIRTUAL,
    get(){
      return `${this.firstName} ${this.lastName}`
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{
  tableName: "customer",
  timestamps: false
});

module.exports = customerModel;