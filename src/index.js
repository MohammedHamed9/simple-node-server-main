// src/app.js
const express = require('express');
const customerRoutes = require('./routes/customer');
const sequelize = require('./database');
const app = express();

app.use(express.json());

app.use('/api', customerRoutes);
const PORT = process.env.PORT || 3000; // You can change the port as needed
sequelize.authenticate().then(()=>{
  console.log('connected to Database...');
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// module.exports = app;