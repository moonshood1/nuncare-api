const User = require("../../../models/User");

const updateProfile = async ({ user, body }, res, next) => {
  try {
    const fieldsToUpdate = body;

    await User.updateOne(
      {
        _id: user._id,
      },
      {
        $set: fieldsToUpdate,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Votre profil a bien été modifié",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message:
        "Une erreur s'est produite lors de la modification de votre profil",
    });
  }
};

module.exports = {
  updateProfile,
};
