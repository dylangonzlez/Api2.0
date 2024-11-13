// src/routes/usuarioRoutes.js
import express from 'express';// Importa express para crear el enrutador
const router = express.Router(); // Crea una instancia de Router
import{ crearUsuario, obtenerUsuarios, actualizarUsuario, borrarUsuario } from '../controllers/usuarioController'; // Importa los controladores de usuario
import { validacionUsuario } from'../Middleware/validarDatos'

// Ruta para crear un nuevo usuario
router.post('/', crearUsuario, validacionUsuario);

// Ruta para obtener todos los usuarios
router.get('/', obtenerUsuarios);

//4. Creamos la ruta para ACTUALIZAR un documento en la colection users
router.put("/users/:id", actualizarUsuario);

//5. Creamos la ruta para BORRAR UN DOCUMENTO de mi bdd en la colection users
router.delete("/users/:id", borrarUsuario);


// Exporta el enrutador para usarlo en otros archivos
module.exports = router;
