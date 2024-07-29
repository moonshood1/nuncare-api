const District = require("../../../models/District");

const getDistricts = async (req, res, next) => {
  try {
    const result = await District.find({});

    const districts = result.map((district) => district.name);

    return res.status(200).json({
      success: true,
      districts,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getDistricts,
};
