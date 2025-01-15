const Hospital = require("../../../models/Hospital");
const _ = require("lodash");

const updateHospital = async (req, res, next) => {
  try {
    const { body } = req;

    const hospital = await Hospital.findById(body._id);

    const updatedHospital = _.assign(hospital, { ...body.data });

    await updatedHospital.save();

    return res.status(200).json({
      success: true,
      message: "Les données de l'hopital ont bien été modifiées",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { updateHospital };
