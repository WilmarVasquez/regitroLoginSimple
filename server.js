const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./backend/config/db");
const authRoutes = require("./backend/routes/authRoutes");

// Configurar variables de entorno
dotenv.config();

// Conectar a la base de datos
connectDB();

// Inicializar la aplicación Express
const app = express();

// Middleware
app.use(cors()); // Permitir solicitudes desde otros dominios
app.use(express.json()); // Parsear JSON en las solicitudes

// Rutas
app.use("/api/auth", authRoutes); // Rutas de autenticación

// Puerto del servidor
const PORT = process.env.PORT || 5000;

// Iniciar el servidor
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
