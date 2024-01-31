const User = require("../../../models/User");
const brcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

const jwtSecret = process.env.JWT_SECRET;

const login = async ({ body }, res, next) => {
  try {
    const { email, password } = body;

    const user = await User.findOne({
      email,
    });

    if (!user)
      return res.status(400).json({
        success: false,
        message: "L'adresse email saisie n'est pas enregistrée",
      });

    const isPasswordValid = await brcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Le mot de passe est incorrecte",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      jwtSecret
    );

    return res.status(200).json({
      success: true,
      message: "Connexion établie",
      token,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  login,
};
