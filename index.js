import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv/config';

import authRouter from './src/routes/auth.routes.js';
import productsRouter from './src/routes/products.routes.js';
import { authentication } from './src/middlewares/authentication.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/auth', authRouter);
app.use('/api/products', authentication, productsRouter);

app.get('/', (req, res) => {
  res.send('✅ API REST funcionando correctamente en producción 🚀');
});

// Ruta por defecto (404)
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Middleware de manejo de errores inesperados
app.use((err, req, res, next) => {
  console.error(err.stack); // para debug en consola
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
