const Doctor = require("../../../models/User");

const getDoctorsWithCustomSearch = async ({ query, user }, res, next) => {
  try {
    let requestDb = {};

    if (query.region) {
      requestDb.region = query.region;
    }
    if (query.specialty) {
      requestDb.specialty = query.specialty;
    }
    if (query.promotion) {
      requestDb.promotion = query.promotion;
    }

    const doctors = await Doctor.find({
      _id: { $ne: user._id },
      ...requestDb,
    });

    return res.status(200).json({
      success: true,
      doctors,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getDoctorsWithCustomSearch,
};
