const KYCDoc = require("../../../models/KycDocumentType");

const getKycDocumentType = async (req, res, next) => {
  try {
    const result = await KYCDoc.find({});

    const documentTypes = result.map((document) => document.name);

    return res.status(200).json({
      success: true,
      documentTypes,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getKycDocumentType,
};
