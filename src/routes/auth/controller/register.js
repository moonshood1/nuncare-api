const User = require("../../../models/User");

const register = async ({ body }, res, next) => {
  try {
    const userExists = await User.findOne({
      email: body.email,
      firebaseId: body.firebaseId,
    });

    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "Ces informations appartiennent à un utilisateur deja créé",
      });
    }

    await User.create({
      firebaseId: body.firebaseId,
      email: body.email,
    });

    return res.status(200).json({
      success: true,
      message: "Inscription réussie , veuillez vous connecter",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  register,
};
