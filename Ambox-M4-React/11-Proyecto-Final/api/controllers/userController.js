const User = require("../schema/User");

module.exports = {
  getUsers: function () {
    return User.find();
  },
  register: function (email, password, name, lastName, nickname) {
    return User.create({
      email: email,
      password: password,
      name: name,
      lastName: lastName,
      nickname: nickname,
    });
  },
  login: function () {},
};
