import {
  getAllProductsDB,
  getProductByIdDB,
  createProductDB,
  deleteProductDB
} from '../models/products.model.js';

export const getAllProductsService = () => getAllProductsDB();
export const getProductByIdService = (id) => getProductByIdDB(id);
export const createProductService = (product) => createProductDB(product);
export const deleteProductService = (id) => deleteProductDB(id);
