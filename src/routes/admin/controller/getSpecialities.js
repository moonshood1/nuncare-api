const Speciality = require("../../../models/Speciality");

const getSpecialities = async ({ query }, res, next) => {
  try {
    let limit = query.limit ?? 10;

    const specialities = await Speciality.find({})
      .limit(limit)
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      data: specialities,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getSpecialities,
};
