const KYCDocument = require("../../../models/KycDocumentType");
const _ = require("lodash");

const addKycDocument = async ({ user, body }, res, next) => {
  try {
    if (_.isEmpty(body.name)) {
      return res.status(400).json({
        success: false,
        message: "Le nom du type de document est requis",
      });
    }

    const kycDoc = await KYCDocument.findOne({
      name: body.name,
    });

    if (kycDoc) {
      return res.status(400).json({
        success: false,
        message:
          "Ce type de document existe déjà dans la base, veuillez le modifier",
      });
    }

    const { name } = body;

    await KYCDocument.create({
      name,
      isActive: false,
    });

    return res.status(200).json({
      success: true,
      message: "Le document KYC a bien été ajouté.",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  addKycDocument,
};
