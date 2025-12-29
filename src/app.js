const express = require('express');
const productRoutes = require('./routes/product.routes');

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message || 'Error interno'
  });
});

module.exports = app;
