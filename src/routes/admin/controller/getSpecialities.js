const Speciality = require("../../../models/Speciality");

const getSpecialities = async ({ query }, res, next) => {
  try {
    let limit = query.limit ?? 10;

    const result = await Speciality.find({})
      .limit(limit)
      .sort({ createdAt: -1 });

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
