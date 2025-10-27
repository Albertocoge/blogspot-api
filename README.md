📰 Blogspot API

Full-Stack MERN Blogging Platform — Backend

API RESTful desarrollada con Node.js, Express y MongoDB para una plataforma de blogging, donde los usuarios pueden registrarse, publicar artículos, editar su perfil y explorar contenido de otros autores.

🌍 Frontend: blogspot-app (React)

🚀 App online: https://blogspot-app-mauve.vercel.app/

📌 Descripción del Proyecto

Blogspot es una aplicación Full Stack MERN (MongoDB, Express, React, Node.js) creada para fomentar comunidades de escritores y lectores.
La API gestiona usuarios, autenticación JWT, creación y edición de publicaciones, subida de imágenes y gestión de categorías.

El frontend permite a los usuarios explorar artículos, registrarse, iniciar sesión, personalizar su perfil y subir contenido de forma intuitiva.

🧩 Tecnologías Principales

Backend:

Node.js + Express.js

MongoDB + Mongoose

JWT (autenticación segura)

bcrypt.js (hashing de contraseñas)

express-fileupload (gestión de imágenes)

dotenv (configuración de variables de entorno)

CORS configurado para entorno de producción y desarrollo

Frontend:

React + Vite

Axios (consumo de la API)

TailwindCSS (estilo moderno y responsive)

⚙️ Estructura del Proyecto
blogspot-api/
│
├── controllers/
│   ├── postControllers.js
│   └── userControllers.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
│
├── models/
│   ├── postModel.js
│   ├── userModel.js
│   └── errorModel.js
│
├── routes/
│   ├── postRoutes.js
│   └── userRoutes.js
│
├── uploads/                # Carpeta para imágenes (thumbnails y avatares)
├── index.js                # Entry point del servidor
├── .env.example            # Variables de entorno (ejemplo)
├── package.json
└── LICENSE

🚀 Instalación y Uso
1️⃣ Clonar el repositorio
git clone https://github.com/Albertocoge/blogspot-api.git
cd blogspot-api

2️⃣ Instalar dependencias
npm install

3️⃣ Configurar variables de entorno

Crea un archivo .env en la raíz del proyecto con las siguientes claves:

PORT=5000
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/blogspot
JWT_SECRET=tu_clave_segura_jwt
CLIENT_URL=http://localhost:5173

4️⃣ Ejecutar el servidor en desarrollo
npm run dev


Servidor disponible en:
👉 http://localhost:5000

📡 Endpoints Principales
🧑‍💻 Usuarios /api/users
Método	Ruta	Descripción	Autenticación
POST	/register	Registrar un nuevo usuario	❌
POST	/login	Iniciar sesión y obtener token JWT	❌
GET	/:id	Obtener información de un usuario	❌
GET	/	Listar todos los autores	❌
POST	/change-avatar	Cambiar avatar del usuario	✅
PATCH	/edit-user	Editar perfil (nombre, email, contraseña)	✅
📝 Posts /api/posts
Método	Ruta	Descripción	Autenticación
POST	/	Crear un nuevo post (con imagen)	✅
GET	/	Obtener todos los posts	❌
GET	/:id	Obtener post por ID	❌
GET	/categories/:category	Obtener posts por categoría	❌
GET	/users/:id	Obtener posts de un usuario	❌
PATCH	/:id	Editar un post existente	✅
DELETE	/:id	Eliminar un post	✅
🧠 Middleware Destacado

authMiddleware.js → Protege rutas con JWT.

errorMiddleware.js → Gestión centralizada de errores.

express-fileupload → Permite subir imágenes de perfil o miniaturas de post.

🔒 Seguridad y Buenas Prácticas

Contraseñas cifradas con bcryptjs.

Tokens JWT con expiración de 1 día.

Sanitización y validaciones en el backend.

CORS configurado con dominios específicos:

localhost:5173 (dev)

blogspot-app-mauve.vercel.app

blogspot-app-lyart.vercel.app

blogspot-app-testing.vercel.app

🧑‍🎨 Autor

👤 Alberto Codoñer Gea
👤 Michael B. Díaz B.
Desarrollador Full Stack | MERN
GitHub

Frontend Repository

🪪 Licencia

Este proyecto está bajo la licencia ISC.
Eres libre de usarlo, modificarlo y distribuirlo citando al autor original.

🌟 Próximas Mejoras (Roadmap)

✏️ Comentarios en los posts

🏷️ Tags múltiples por artículo

🧭 Paginación y filtrado avanzado

🧰 Panel de administración

☁️ Integración con Cloudinary para imágenes
