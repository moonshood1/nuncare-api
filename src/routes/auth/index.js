const express = require("express");
const { login, register, loginWithPassword } = require("./controller");
const { userToken } = require("../../services/auth");

const router = express.Router();



router.post("/login", login);
router.post("/register", register);
router.post('/login-with-password', userToken, loginWithPassword)

module.exports = router;
