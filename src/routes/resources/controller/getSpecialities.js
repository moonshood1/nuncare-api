const Speciality = require("../../../models/Speciality");

const getSpecialities = async (req, res, next) => {
  try {
    const result = await Speciality.find({});

    const specialities = result.map((speciality) => speciality.name);

    return res.status(200).json({
      success: true,
      specialities,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getSpecialities,
};
