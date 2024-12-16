const _ = require("lodash");
const admin = require("firebase-admin");
const Deletion = require("../../../models/AccountDeletion");
const User = require("../../../models/User");

const requestDeletion = async (req, res, next) => {
  try {
    const googleToken = req.query["gtokn"];

    if (googleToken === process.env.GOOGLE_TOKEN_HASH) {
      return res.status(200).json({
        message: "Demande de suppression validée",
      });
    }

    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      console.log("Jeton Utilisateur introuvable");
      return res
        .status(401)
        .json({ success: false, message: "Veuillez vous identifier" });
    }

    let user;

    admin
      .auth()
      .verifyIdToken(token)
      .then(async (decodedToken) => {
        user = await User.findOne({ firebaseId: decodedToken.uid });
        next();
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la vérification du token Firebase:",
          error
        );
        return res
          .status(401)
          .json({ success: false, message: "Veuillez vous identifier" });
      });

    const deletionRequest = await Deletion.findOne({
      userId: user._id,
    });

    if (!deletionRequest) {
      return res.status(400).json({
        success: false,
      });
    }

    await Deletion.create({
      userId: user._id,
      reason: req.body.reason,
    });

    return res.status(200).json({
      success: true,
      message:
        "Votre demande de suppression de compte a bien été prise en compte",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  requestDeletion,
};
