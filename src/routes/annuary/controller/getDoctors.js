const Doctor = require("../../../models/User");

const getDoctors = async ({ user, query }, res, next) => {
  try {
    const doctors = await Doctor.find({ _id: { $ne: user._id } })
      .sort({ createdAt: -1 })
      .limit(query.size);

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
