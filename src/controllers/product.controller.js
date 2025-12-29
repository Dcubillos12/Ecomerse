const productService = require('../services/product.service');

const getAll = async (req, res, next) => {
  try {
    const products = await productService.getProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const product = await productService.getProduct(req.params.id);
    res.json(product);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById
};
