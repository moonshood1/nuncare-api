const Doctor = require("../../../models/User");

const getDoctors = async ({ query }, res, next) => {
  try {
    let limit = query.limit ?? 10;
    const doctors = await Doctor.find({}).limit(limit).sort({ createdAt: -1 });

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
  getDoctors,
};
