import admin from 'firebase-admin';
import fs from 'fs';

// Ruta absoluta al archivo .json
const serviceAccount = JSON.parse(
  fs.readFileSync(new URL('../../firebase/serviceAccountKey.json', import.meta.url))
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export const db = admin.firestore();
