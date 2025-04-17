const District = require("../../../models/District");

const getDistricts = async ({ query }, res, next) => {
  try {
    const districts = await District.find({}).sort({ name: 1 });

    return res.status(200).json({
      success: true,
      data: districts,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getDistricts,
};
