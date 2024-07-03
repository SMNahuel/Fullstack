const express = require("express");
const app = express();
/**
 * 
 * @param {*} user 
 */
function register(user) {
    /**
    *   use : {
    *       email: "test@gmail.com"
    *       passwword: "123456"
    *       name: "Nahuel"    
    * }
    */
    // Buscar un usuario en la DB con ese email
    // return "ese usuario ya esta registrado"
    // Crifrar la contraseña
    // Crear el usuario en la BD 
    // return send.status(200)
}

app.listen(5000, () => {
  showCount(0);
  // 0
  showCount(null);
});
