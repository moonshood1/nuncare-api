const Doctor = require("../../../models/User");

const generateData = async (req, res, next) => {
  try {
    await Doctor.updateMany(
      {},
      {
        $set: {
          university: "",
          countryUniversity: "",
        },
      }
    );
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  generateData,
};
