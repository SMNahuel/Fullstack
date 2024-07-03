require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./schema/User");
const { Cart } = require("./schema/Cart");
const app = express();
app.use(cors());
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Connect to DB Mongo */
const dbURI = `mongodb+srv://NSM:Develop123!@cluster0.gaxlr2x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(dbURI);

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

const Listen_Port = 3001;

app.post("/register", function (req, res) {
  const {
    name,
    lastName,
    email,
    nickname,
    password,
    countryCode,
    phoneNumber,
  } = req.body;
  console.log(req.body)
  const newUser = new User({
    name: name,
    lastName: lastName,
    email: email,
    nickname: nickname,
    password: password,
    countryCode: countryCode,
    phoneNumber: phoneNumber,
  });
  try{
    newUser.save()
    return res.sendStatus(201);
  }
  catch(err){
    return res.sendStatus(404)
  }

});

app.get("/users", async function (req, res) {
  let array = await User.find();
  res.sendStatus(array);
});

app.put("/users/update", function (req, res) {
  User.findOneAndUpdate(
    { name: "Manuel" },
    { name: "Nahuel" },
    {
      new: true,
    }
  )
    .then((resultado) => {
      if (resultado) {
        console.log("Usuario actualizado exitosamente:", resultado);
      } else {
        console.log("Usuario no encontrado:");
      }
      return res.sendStatus(200);
    })
    .catch((error) => {
      console.error("Error al actualizar el producto:", error);
    });
});

app.delete("/users/delete", function () {
  User.findOneAndDelete({ name: "Nahuel" })
    .then((resultado) => {
      if (resultado) {
        console.log("Usuario eliminado exitosamente:", resultado);
      } else {
        console.log("Usuario no encontrado:");
      }
    })
    .catch((error) => {
      console.error("Error al eliminar el usuario:", error);
    });
});

app.delete("/users/:id", function () {
  User.findOneAndDelete({ name: "Nahuel" })
    .then((resultado) => {
      if (resultado) {
        console.log("Usuario eliminado exitosamente:", resultado);
      } else {
        console.log("Usuario no encontrado:");
      }
    })
    .catch((error) => {
      console.error("Error al eliminar el usuario:", error);
    });
});
app.listen(Listen_Port, function () {
  console.log("Server corriendo http://localhost:" + Listen_Port + "/");
});
