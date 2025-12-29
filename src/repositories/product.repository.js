const { pool, sql } = require('../config/database');

const getAllProducts = async () => {
  const connection = await pool;
  const result = await connection.request()
    .query('SELECT * FROM products');
  return result.recordset;
};

const getProductById = async (id) => {
  const connection = await pool;
  const result = await connection.request()
    .input('id', sql.Int, id)
    .query('SELECT * FROM products WHERE id = @id');
  return result.recordset[0];
};

module.exports = {
  getAllProducts,
  getProductById
};
