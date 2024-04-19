const Medecine = require("../../../models/Medecine");

const getMedecines = async ({ query }, res, next) => {
  try {
    const { size } = query;

    const medecines = await Medecine.find({})
      .sort({ createdAt: -1 })
      .limit(size)
      .exec();

    console.log("Nombre de medicaments retournés :", medecines.length);

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
