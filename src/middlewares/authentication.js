import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.JWT_SECRET_KEY;

export const authentication = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ error: 'Token no proporcionado en el header Authorization' });
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Formato de token inválido. Debe ser "Bearer <token>"' });
  }

  jwt.verify(token, secret_key, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido o expirado' });
    }

    req.user = decoded;
    next();
  });
};
