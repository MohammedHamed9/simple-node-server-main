// src/routes/userRoutes.js
const express = require('express');
const customerController = require('../controllers/customer');

const router = express.Router();

router.post('/customers', customerController.createCustomer);

module.exports = router;