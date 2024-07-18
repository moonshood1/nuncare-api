const Doctor = require("../../../models/User");

const getLastRegistered = async ({ user }, res, next) => {
  try {
    const doctors = await Doctor.find({ firebaseId: { $ne: user.firebaseId } })
      .sort({ createdAt: -1 })
      .limit(4)
      .exec();

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
  getLastRegistered,
};
