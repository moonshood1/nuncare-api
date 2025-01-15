const Speciality = require("../../../models/Speciality");

const deleteSpeciality = async (req, res, next) => {
  try {
    const { _id } = body;

    const result = await Speciality.findById(_id);

    if (!result) {
      return res.status(400).json({
        success: false,
        message: "Specialité introuvable",
      });
    }

    await Speciality.deleteOne({
      _id: result._id,
    });

    return res.status(200).json({
      success: true,
      message: "Specialité supprimée",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { deleteSpeciality };
