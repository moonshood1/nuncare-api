const Hospital = require("../../../models/Hospital");

const deleteHospital = async ({ body }, res, next) => {
  try {
    const { _id } = body;

    const result = await Hospital.findById(_id);

    if (!result) {
      return res.status(400).json({
        success: false,
        message: "Hopital introuvable",
      });
    }

    await Hospital.deleteOne({
      _id: result._id,
    });

    return res.status(200).json({
      success: true,
      message: "Hopital supprimé",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { deleteHospital };
