const KYCDocument = require("../../../models/KycDocumentType");

const getKycDocuments = async (req, res, next) => {
  try {
    const documents = await KYCDocument.find({});

    return res.status(200).json({
      success: true,
      data: documents,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getKycDocuments,
};
