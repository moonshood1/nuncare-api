const Medecine = require("../../../models/Medecine");

const getMedecines = async (req, res, next) => {
  try {
    const medecines = await Medecine.find({}).limit(10).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      medecines,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getMedecines,
};
