const Medecine = require("../../../models/Medecine");

const getMedecines = async ({ query }, res, next) => {
  try {
    let limit = query.limit ?? 10;

    const medecines = await Medecine.find({})
      .limit(limit)
      .sort({ createdAt: -1 });

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
