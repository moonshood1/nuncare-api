const Hospital = require("../../../models/Hospital");

const getHospitals = async ({ query }, res, next) => {
  try {
    let limit = query.limit ?? 10;

    const hospitals = await Hospital.find({})
      .limit(limit)
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      data: hospitals,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getHospitals,
};
