const Doctor = require("../../../models/User");

const getDoctorsWithCustomSearch = async ({ body, query, user }, res, next) => {
  try {
    const {
      district,
      region,
      specialty,
      promotion,
      city,
      speciality,
      university,
      gender,
    } = body;

    const requestDb = {
      region,
      specialty,
      promotion,
      district,
      city,
      speciality,
      university,
      gender,
      _id: { $ne: user._id },
    };

    Object.keys(requestDb).forEach((key) => {
      if (requestDb[key] === undefined || requestDb[key] === "") {
        delete requestDb[key];
      }
    });

    console.log(requestDb);

    const doctors = await Doctor.find(requestDb);

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
