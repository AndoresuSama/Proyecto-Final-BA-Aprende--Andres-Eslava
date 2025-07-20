import {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  deleteProductService
} from '../services/products.service.js';

export async function getAllProducts(req, res) {
  const products = await getAllProductsService();
  res.json(products);
};

export async function getProductById(req, res) {
  const { id } = req.params;
  const product = await getProductByIdService(id);
  if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
  res.json(product);
};

export async function createProduct(req, res) {
  const { title, price, stock, description } = req.body;

  if (!title || typeof price !== 'number' || typeof stock !== 'number' || typeof description !== 'string') {
    return res.status(400).json({ error: 'Faltan datos o tienen formato incorrecto' });
  }

  const created = await createProductService({ title, price, stock, description });
  res.status(201).json(created);
};

export async function deleteProduct(req, res) {
  const { id } = req.params;
  const deleted = await deleteProductService(id);

  if (!deleted) {
    return res.status(404).json({ error: 'Producto no encontrado. No se puede eliminar.' });
  }

  res.json({ message: 'Producto eliminado', data: deleted });
}
