const Doctor = require("../../../models/User");
const _ = require("lodash");

const updateDoctor = async (req, res, next) => {
  try {
    const { body } = req;

    const user = await Doctor.findById(body._id);

    const updatedDoctor = _.assign(user, { ...body.data });

    await updatedDoctor.save();

    return res.status(200).json({
      success: true,
      message: "Les données du docteur ont bien été modifiées",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { updateDoctor };
