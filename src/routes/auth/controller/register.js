const User = require("../../../models/User");
const bcrypt = require("bcrypt");

const register = async ({ body }, res, next) => {
  try {
    const {
      email,
      firstName,
      lastName,
      password,
      phoneNumber,
      orderNumber,
      region,
      city,
      speciality,
      medialCenter,
    } = body;

    // differents check ( email , numero de telephone)

    const userExists = await User.findOne({
      email,
    });

    if (userExists) {
      return res.status(400).json({
        error: true,
        message:
          "L'adresse email que vous avez renseigné existe déjà , essayez de vous connecter",
      });
    }
    // bcrypter le mot de passe

    const hashedPassword = await bcrypt.hash(password, 10);

    // si ok , cree le compte et  renvoyer un message de succes

    await User.create({
      email,
      firstName,
      lastName,
      password: hashedPassword,
      speciality,
      phone: phoneNumber,
      hospital: medialCenter,
      orderNumber,
      city,
      region,
    });

    return res.status(200).json({
      success: true,
      message: "Inscription réussie , veuillez vous connecter ",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  register,
};
