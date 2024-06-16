const Hospital = require("../../../models/Hospital");

const getHospitals = async (req, res, next) => {
  try {
    const hospitals = await Hospital.find({}).limit(10).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      hospitals,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getHospitals,
};
