// src/routes/rolRoutes.js
import express from 'express';// Importa express para crear el enrutador
const router = express.Router(); // Crea una instancia de Router
import { crearRol, obtenerRoles, actualizarRol, borrarRol } from '../controllers/rolController'; // Importa los controladores de rol
import { validaciomRol } from '../Middleware/validarDatos'

// Ruta para crear un nuevo rol
router.post('/', crearRol, validaciomRol);

// Ruta para obtener todos los roles
router.get('/', obtenerRoles);

//4. Creamos la ruta para ACTUALIZAR un documento en la colection users
router.put("/users/:id", actualizarRol);

//5. Creamos la ruta para BORRAR UN DOCUMENTO de mi bdd en la colection users
router.delete("/users/:id", borrarRol);


// Exporta el enrutador para usarlo en otros archivos
module.exports = router;
