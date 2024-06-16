const Doctor = require("../../../models/User");

const getDoctors = async (req, res, next) => {
  try {
    const doctors = await Doctor.find({}).limit(10).sort({ createdAt: -1 });

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
