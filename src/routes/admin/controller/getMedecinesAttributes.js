const Medecine = require("../../../models/Medecine");

const getMedecinesAttributes = async (req, res, next) => {
  try {
    const regimes = await Medecine.distinct("regime");
    const groups = await Medecine.distinct("group");
    const dcis = await Medecine.distinct("dci");
    const categories = await Medecine.distinct("category");

    return res.status(200).json({
      success: true,
      data: {
        regimes,
        groups,
        dcis,
        categories,
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getMedecinesAttributes,
};
