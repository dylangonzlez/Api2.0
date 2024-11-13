import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Usuario-Rol',
      version: '1.0.0',
      description: 'Documentación de la API para gestionar usuarios y roles',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Rutas de archivos con anotaciones Swagger
};


const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerUi, swaggerSpec };

