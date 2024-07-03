const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    /*     match: [
      /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      "No cumple con la estructura de un email",
    ], */
  },
  password: {
    type: String,
    required: true,
    /*     match: [
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
      "Debe cumplir con tener un simbolo",
    ], */
  },
  nickname: {
    type: String,
    required: true,
  },
  /*   countryCode: {
    type: String,
    required: true,
    enum: ["+54", "+595", "+55", "+598"],
  }, */
  /*   phoneNumber: {
    required: true,
    type: String,
  }, */
  /*   cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "Libro" }], */
});

const User = mongoose.model("User", userSchema);

module.exports = User;
