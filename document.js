
/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       required:
 *         - nombre
 *         - email
 *         - password
 *         - rol
 *       properties:
 *         id:
 *           type: string
 *           description: ID autogenerado del usuario
 *         nombre:
 *           type: string
 *           description: Nombre del usuario
 *         email:
 *           type: string
 *           description: Correo del usuario
 *         password:
 *           type: string
 *           description: Contraseña del usuario
 *         rol:
 *           type: string
 *           description: ID del rol asignado al usuario
 *       example:
 *         nombre: Juan Pérez
 *         email: juan.perez@example.com
 *         password: 123456
 *         rol: 64a1f72d9e2c3e4b5678a1f4
 */

/**
 * @swagger
 * /api/usuarios:
 *   get:
 *     summary: Obtiene la lista de todos los usuarios
 *     tags: [Usuario]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 */

router.get('/', obtenerUsuarios);