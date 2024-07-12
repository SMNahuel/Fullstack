const express = require("express");
const app = express();
/**
 *
 * @param {*} user
 */

app.listen(5000, () => {
  console.log("Server running");
});

/* BD */
const users = [];

function register(user) {
  // Buscar un usuario en la DB con ese email
  // return "ese usuario ya esta registrado"
  // Crifrar la contraseña
  // Crear el usuario en la BD
  // return send.status(200)

  users.push(user)
}

/* 
  request === req (Petición que hace el usuario) 
  response === res (Respuesta que le vamos a dar al usuario)
*/

app.get("/", (req, res) => {
  return res.send(users);
});

app.get("/register", (req, res) => {
  register({ name: "Nahuel", email: "nahuelsan96@gmail.com" });
  return res.send("Usuario agregado");
});



/* Funciones con parametros */

/* Funcion push de array */

/* VERBOS */

// GET
// POST 
// PUT 
// DELETE
// PACTH 


