const Medecine = require("../../../models/Medecine");

const deleteMedecineBulk = async ({ body }, res, next) => {
  try {
    const { ids } = body;

    for (const id of ids) {
      const result = await Medecine.findById(id);

      if (!result) {
        console.log("Medicament non trouvé pour suppression");
        continue;
      }

      await Medecine.deleteOne({
        _id: id,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Medicaments supprimés",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { deleteMedecineBulk };
