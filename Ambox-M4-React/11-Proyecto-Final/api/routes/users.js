var express = require("express");
const { getUsers, register } = require("../controllers/userController");
var router = express.Router();
var bcrypt = require("bcrypt");

const saltRounds = 10;

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const r = await getUsers();

  res.send(r);
});

router.post("/register", async function (req, res, next) {
  console.log(req.body)
  const { email, password, name, lastName, nickname } = req.body;

  const passwordHash = await bcrypt.hash(password, saltRounds);
  /* Validar si llegan los datos */
  try{
    const r = await register(email, passwordHash, name, lastName, nickname)
    if(r){
      return res.send("El usuario se creo");
    }else{
      throw ("Usuario no creado")
    }
  }catch(err){
    return res.send(404)
  }

});

router.post("/login", async function (req, res, next) {});

module.exports = router;
