const User = require("../../../models/User");
const _ = require("lodash");

const addLocation = async ({ user, body }, res, next) => {
  try {
    await User.updateOne(
      { _id: user._id },
      { $set: { lng: body.lng, lat: body.lat, address: body.address } }
    );

    return res.status(200).json({
      success: true,
      message: "Les données de localisation ont bien été ajoutées",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message:
        "Une erreur s'est produite lors de  l'ajout des données de localisation",
    });
  }
};

module.exports = {
  addLocation,
};
