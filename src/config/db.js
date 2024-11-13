import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Conectado a MONGOBD Atlas (WEB)");
  })
  .catch((error) => {
    console.log(`Ocurrio el siguiente error al conectarse == ${error.message}`);
  });

  export {port};// Exporta la función para usarla en otros archivos
