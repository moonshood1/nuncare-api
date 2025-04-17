const Doctor = require("../../../models/User");
const _ = require("lodash");
const getDoctors = async ({ query }, res, next) => {
  try {
    let limit = query.limit ?? 2;
    const doctors = await Doctor.find({}).limit(limit).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      data: doctors,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getDoctors,
};
