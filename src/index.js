import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import connectDB from '../src/config/db'; // Importa la conexión a la base de datos
require('dotenv').config(); // Carga las variables de entorno

dotenv.config();

//Usamos el metodo connect para conectar a la base de datos
mongoose.connect(process.env.MONGO_URI);
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch((error) => console.error('Error de conexión a MongoDB:', error));
    

// Importa las rutas
const usuarioRoutes = require('./routes/usuarioRoutes');
const rolRoutes = require('./routes/rolRoutes');

const app = express(); // Crea la aplicación de Express

// Middlewares
app.use(express.json()); // Middleware para analizar el cuerpo de las solicitudes JSON

// Rutas
app.use('/api/usuarios', usuarioRoutes); // Define el prefijo de las rutas de usuarios
app.use('/api/roles', rolRoutes); // Define el prefijo de las rutas de roles

// Middleware para manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Ocurrió un error en el servidor' });
  });

// Inicia la conexión a la base de datos y el servidor
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
