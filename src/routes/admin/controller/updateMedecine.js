const Medecine = require("../../../models/Medecine");
const _ = require("lodash");

const updateMedecine = async (req, res, next) => {
  try {
    const { body } = req;

    const medecine = await Medecine.findById(body._id);

    const updatedMedecine = _.assign(medecine, { ...body.data });

    await updatedMedecine.save();

    return res.status(200).json({
      success: true,
      message: "Les données du médicament ont bien été modifiées",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { updateMedecine };
