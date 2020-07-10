const { hashPassword, compareHash } = require("../services/bcrypt");

const signup = (req, res, next) => {
  res.send({ message: "Hey" });
};
const login = (req, res, next) => {};
const guest = (req, res, next) => {};
const logout = (req, res, next) => {};

module.exports = {
  signup,
  login,
  guest,
  logout,
};
