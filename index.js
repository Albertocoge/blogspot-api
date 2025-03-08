const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
require("dotenv").config();
const upload = require("express-fileupload");

const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

// 🧩 Middleware base
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🧩 Configurar CORS correctamente
app.use(cors({
  origin: [
    process.env.CLIENT_URL || "http://localhost:5173",
    "https://blogspot-app-mauve.vercel.app",
    "https://blogspot-app-lyart.vercel.app",
    "https://blogspot-app-testing.vercel.app"
  ],
  credentials: true, // Permitir cookies o autenticación
  methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
  allowedHeaders: ["Content-Type", "Authorization"], // Encabezados permitidos
}));

// 🧩 Subidas de archivos y carpeta estática
app.use(upload());
app.use("/uploads", express.static(__dirname + "/uploads"));

// 🧩 Rutas
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// 🧩 Middlewares de error
app.use(notFound);
app.use(errorHandler);

// 🧩 Conexión a MongoDB y arranque del servidor
const PORT = process.env.PORT || 5000;

connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch(error => {
    console.error("❌ Error al conectar a MongoDB:", error);
    process.exit(1);
  });
