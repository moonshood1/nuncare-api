const User = require("../../../models/User");

const deleteAbout = async ({ user }, res, next) => {
  try {
    await User.updateOne(
      {
        _id: user._id,
      },
      {
        $set: {
          about: "",
        },
      }
    );

    return res.status(200).json({
      success: true,
      message: "Votre description a été supprimée avec succès",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  deleteAbout,
};
