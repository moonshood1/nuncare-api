const User = require("../../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

const jwtSecret = process.env.JWT_SECRET;

const loginWithPassword = async ({ body, user }, res, next) => {
  try {
    const { password } = body;

    const userExists = await User.findOne({
      _id: user._id,
    });

    if (!userExists)
      return res.status(400).json({
        success: false,
        message: "L'utilisateur n'est pas reconnu",
      });

    const isPasswordValid = await bcrypt.compare(password, userExists.password);

    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Le mot de passe est incorrecte",
      });
    }

    const token = jwt.sign(
      {
        id: userExists._id,
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
  loginWithPassword,
};
