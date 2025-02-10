const { login } = require("./login");
const { register } = require("./register");
const { storeFcmToken } = require("./storeFcmToken");

module.exports = {
  register,
  storeFcmToken,
  login,
};
