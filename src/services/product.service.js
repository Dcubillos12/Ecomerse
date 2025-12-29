const productRepo = require('../repositories/product.repository');

const getProducts = async () => {
  return await productRepo.getAllProducts();
};

const getProduct = async (id) => {
  const product = await productRepo.getProductById(id);
  if (!product) {
    throw new Error('Producto no encontrado');
  }
  return product;
};

module.exports = {
  getProducts,
  getProduct
};
