const Doctor = require("../../../models/User");
const _ = require("lodash");

const getDoctorsWithPeriodStats = async ({ query }, res, next) => {
  try {
    // the query is either week , month or year
    const { period } = query;

    const doctors = await Doctor.find(queryParams).sort({ createdAt: -1 });

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
  getDoctorsWithPeriodStats,
};
