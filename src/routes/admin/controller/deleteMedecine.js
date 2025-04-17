const Medecine = require("../../../models/Medecine");

const deleteMedecine = async ({ query }, res, next) => {
  try {
    const { id } = query;

    const result = await Medecine.findById(id);

    if (!result) {
      return res.status(400).json({
        success: false,
        message: "Medicament introuvable",
      });
    }

    await Medecine.deleteOne({
      _id: result._id,
    });

    return res.status(200).json({
      success: true,
      message: "Medicament supprimé",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { deleteMedecine };
