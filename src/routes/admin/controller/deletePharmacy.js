const Pharmacy = require("../../../models/Pharmacy");

const deletePharmacy = async ({ query }, res, next) => {
  try {
    const { id } = query;

    const result = await Pharmacy.findById(id);

    if (!result) {
      return res.status(400).json({
        success: false,
        message: "Pharmacie introuvable",
      });
    }

    await Pharmacy.deleteOne({
      _id: result._id,
    });

    return res.status(200).json({
      success: true,
      message: "Pharmacie supprimée",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { deletePharmacy };
