// src/services/userService.js
const customerModel = require('../../models/customer');

const createCustomer = async (userData) => {
  return await customerModel.create(userData);
};

module.exports = {
  createCustomer,
};