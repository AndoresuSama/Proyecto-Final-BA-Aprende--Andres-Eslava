import { db } from '../config/firebase.config.js';

const collection = db.collection('products');

export const getAllProductsDB = async () => {
  const snapshot = await collection.get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getProductByIdDB = async (id) => {
  const doc = await collection.doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() };
};

export const createProductDB = async (product) => {
  const docRef = await collection.add(product);
  return { id: docRef.id, ...product };
};

export const deleteProductDB = async (id) => {
  const docRef = collection.doc(id);
  const doc = await docRef.get();

  if (!doc.exists) {
    return null; // No existe
  }

  await docRef.delete();
  return { id, ...doc.data() };
};

