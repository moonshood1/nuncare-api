const _ = require("lodash");
const KycRequest = require("../../../models/Verification");

const submitKyc = async ({ body, user }, res, next) => {
  try {
    const verification = await KycRequest.findOne({
      user: user._id,
      status: "PENDING",
    });

    if (verification) {
      return res.status(400).json({
        success: false,
        message:
          "Vous avez deja une demande de KYC en cours , vous ne pouvez pas soumettre une nouvelle demande pour le moment",
      });
    }

    const { recto, verso, picture, firstName, lastName, documentNumber } = body;

    if (recto == "" || verso == "" || picture == "") {
      return res.status(400).json({
        success: false,
        message: "Une des photos n'est pas valide , veuillez rééssayer",
      });
    }

    if (firstName == "" || lastName == "") {
      return res.status(400).json({
        success: false,
        message: "Un des noms saisie est invalide , veuillez rééssayer",
      });
    }

    if (documentNumber == "") {
      return res.status(400).json({
        success: false,
        message: "Le numéro de document est invalide , veuillez rééssayer",
      });
    }

    await KycRequest.create({
      firstName,
      lastName,
      documentNumber,
      documentType,
      recto,
      verso,
      picture,
    });

    return res.status(200).json({
      success: true,
      message: "Votre requête a bien été prise en compte",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message:
        "Une erreur s'est produite lors de la verification de votre compte",
    });
    next(error);
  }
};

module.exports = {
  submitKyc,
};
