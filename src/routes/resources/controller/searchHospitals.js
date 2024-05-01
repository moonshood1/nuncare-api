const Hospital = require("../../../models/Hospital");

const searchHospitals = async ({ body, user }, res, next) => {
  try {
    const searchText = body.searchText;

    const hospitals = await Hospital.find({
      name: { $regex: new RegExp(searchText, "i") },
    });

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
  searchHospitals,
};
