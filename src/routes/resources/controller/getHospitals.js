const Hospital = require("../../../models/Hospital");
const _ = require("lodash");

const getHospitals = async ({ query }, res, next) => {
  try {
    const { size } = query;

    const hospitals = await Hospital.find({})
      .sort({ createdAt: -1 })
      .limit(size)
      .exec();

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
