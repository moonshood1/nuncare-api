const User = require("../../../models/User");

const addAbout = async ({ user, body }, res, next) => {
  try {
    await User.updateOne(
      {
        _id: user._id,
      },
      {
        $set: {
          about: body.aboutText,
        },
      }
    );

    return res.status(200).json({
      success: true,
      message: "Votre description a été ajoutée avec succès",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  addAbout,
};
