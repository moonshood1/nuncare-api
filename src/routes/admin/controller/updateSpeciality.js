const Speciality = require("../../../models/Speciality");
const _ = require("lodash");

const updateSpeciality = async (req, res, next) => {
  try {
    const { body, query } = req;

    const speciality = await Speciality.findById(query.id);

    const updatedspeciality = _.assign(speciality, { ...body });

    await updatedspeciality.save();

    return res.status(200).json({
      success: true,
      message: "La spécialité a été mise à jour avec succès",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { updateSpeciality };
