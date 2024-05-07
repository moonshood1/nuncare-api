const admin = require("firebase-admin");
const User = require("../../../models/User");

const getInformations = async ({ user }, res, next) => {
  try {
    // const user = await User.findOne({_id:user._id})
    // const db = admin.firestore();

    // const userDoc = await db.collection("Users").doc(user.firebaseId).get();

    // if (!userDoc.exists) {
    //   return res
    //     .status(404)
    //     .json({ success: false, message: "L'utilisateur n'existe pas." });
    // }

    // const userData = userDoc.data();

    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des informations de l'utilisateur :",
      error
    );
    return res.status(500).json({
      success: false,
      message:
        "Erreur lors de la récupération des informations de l'utilisateur.",
    });
  }
};

module.exports = {
  getInformations,
};
