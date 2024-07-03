require("dotenv").config();
var cookieParser = require("cookie-parser");
var express = require("express");
const bodyParser = require('body-parser');

const morgan = require('morgan');

/* ----------------------------------------------------------------- */
/*                        Conection BD                               */
/* ----------------------------------------------------------------- */

const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URI);

const db = mongoose.connection;

/* Cuando se conecte sin error */
db.on("connected", () => {
  console.log(`Conexión establecida a la DB de Mongo`);
});

/* Cuando no se pueda conectar */
db.on("error", (err) => {
  console.error("Error de conexión a la base de datos:", err);
});

/* Cuando nos desconectemos */
db.on("disconnected", () => {
  console.log("Desconectado de la base de datos");
});
/* ----------------------------------------------------------------- */

/* ----------------------------------------------------------------- */
/*                              Rutas                                */
/* ----------------------------------------------------------------- */

var indexRouter = require("./routes/index");
/* ----------------------------------------------------------------- */

var server = express();

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
server.use(indexRouter);

module.exports = server;
