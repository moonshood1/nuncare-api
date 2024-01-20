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
        error: true,
        message: "L'adresse email saisie n'est pas enregistrée",
      });

    const isPasswordValid = await brcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({
        error: true,
        message: "Le mot de passe est incorrecte",
      });
    }

    // si l'email et le mot de passe correspondent

    const token = jwt.sign(
      {
        userId: user._id,
      },
      jwtSecret
    );

    // retourner les details de l'utilisateur puis son token

    return res.status(200).json({
      success: true,
      message: "Connexion établie",
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phone,
      orderNumber: user.orderNumber,
      city: user.city,
      speciality: user.speciality,
      medicalCenter: user.hospital,
      email: user.email,
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
