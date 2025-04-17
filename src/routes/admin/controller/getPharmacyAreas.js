const Area = require("../../../models/Area");

const getAreas = async (req, res, next) => {
  try {
    const areas = await Area.find();

    return res.status(200).json({
      success: true,
      data: areas,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getAreas,
};
