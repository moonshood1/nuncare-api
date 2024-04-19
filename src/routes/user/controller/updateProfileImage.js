const User = require("../../../models/User");

const updateProfileImage = async ({ user, body }, res, next) => {
  try {
    await User.updateOne(
      {
        _id: user._id,
      },
      {
        $set: {
          img: body.newImg,
        },
      }
    );

    return res.status(200).json({
      success: true,
      message: "Votre image de profil a été modifiée avec succès",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  updateProfileImage,
};
