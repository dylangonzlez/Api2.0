import express from 'express';
import connectDB from('..config/db.js');
require('dotenv').config();
const { swaggerUi, swaggerSpec } = require('./config/swaggerConfig');
const usuarioRoutes = require('./routes/usuarioRoutes');
const rolRoutes = require('./routes/rolRoutes');

const app = express();
app.use(express.json());

// Documentación de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/roles', rolRoutes);

connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Documentación de la API en http://localhost:${PORT}/api`);
});  