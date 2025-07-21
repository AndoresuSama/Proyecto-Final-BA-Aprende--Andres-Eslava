# 🛠️ Proyecto Final - API REST con Node.js, JWT y Firebase Firestore

Este es el proyecto final del curso de Node.js. Es una API RESTful que permite gestionar productos (CRUD), con autenticación basada en JWT y base de datos en la nube utilizando **Firebase Firestore**.

## 🚀 Características principales

- Autenticación segura con **JWT**
- Base de datos remota con **Firestore**
- Arquitectura escalable: rutas, controladores, servicios, modelos y middlewares
- Protección de rutas privadas con token
- Manejo de errores profesional
- Listo para correr en local o desplegar en **Vercel**

---

## 📦 Instalación y uso en local (`main` branch)

### 1. Clonar el repositorio

```bash
git clone https://github.com/AndoresuSama/Proyecto-Final-BA-Aprende--Andres-Eslava
cd Proyecto-Final-BA-Aprende--Andres-Eslava
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Crear tu proyecto en Firebase

- Ingresá a [Firebase Console](https://console.firebase.google.com/)
- Activá **Cloud Firestore**
- Generá una clave de cuenta de servicio (Service Account)
- Guardá el archivo `.json` como:

```
/firebase/serviceAccountKey.json
```

> 🔐 ¡No subas este archivo a GitHub!

### 4. Crear archivo `.env`

```bash
JWT_SECRET_KEY=api_rest_project_secret_token_key
```

### 5. Ejecutar el servidor

```bash
npm run start
```

El servidor iniciará en `http://localhost:3000`

---

## 🧪 Rutas disponibles

### Autenticación
- `POST /auth/login` → Devuelve un token si las credenciales son correctas

### Productos (protegidas con JWT)
- `GET /api/products` → Lista todos los productos
- `GET /api/products/:id` → Obtiene un producto por ID
- `POST /api/products/create` → Crea un producto
- `DELETE /api/products/:id` → Elimina un producto

> Debes incluir el token JWT en el header `Authorization: Bearer <token>`

---

## ☁️ Despliegue en producción (`deploy-vercel` branch)

Si querés usar este proyecto **como un backend en producción (Vercel)**:

1. Cambiá a la rama `deploy-vercel`:

```bash
git checkout deploy-vercel
```

2. En tu panel de Vercel, andá a **Project Settings → Environment Variables**

3. Agregá una variable llamada `FIREBASE_CONFIG` con el contenido de tu `serviceAccountKey.json` **en una sola línea**.

> ⚠️ Esta variable debe definirse **solo en Vercel**, no escribas esa línea en tu código fuente para evitar exponer tus credenciales.

4. Vercel utilizará esa rama para desplegar la API y mantener tus claves seguras sin subir archivos.

5. ✅ API desplegada y funcionando en:

```
https://proyecto-final-ba-aprende-andres-es.vercel.app/
```

Podés probar los endpoints directamente desde esa URL.

---

## 🧠 Tecnologías usadas

- Node.js
- Express
- Firebase Admin SDK
- JSON Web Token (JWT)
- dotenv
- body-parser
- cors

---

## 📂 Estructura del proyecto

```
├── index.js
├── .env
├── /firebase
│   └── serviceAccountKey.json (solo local)
├── /src
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── utils/
```

---

## 📌 Notas

- Este proyecto fue creado como práctica final del curso de Node.js.
- Las credenciales están protegidas mediante `.gitignore` y variables de entorno.
- Está listo para correr localmente o ser desplegado en plataformas como Vercel.

---

## 👨‍💻 Autor

Andrés Eslava  
[Tu GitHub](https://github.com/AndoresuSama)
