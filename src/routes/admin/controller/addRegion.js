const Region = require("../../../models/Region");

const addRegion = async ({ body }, res, next) => {
  try {
    const { name, district } = body;

    const region = await Region.findOne({
      name,
    });

    if (region) {
      return res.status(400).json({
        success: false,
        message: "Cette région existe déja dans la base, veuillez la modifier",
      });
    }

    await Region.create({
      name,
      district,
    });

    return res.status(200).json({
      success: true,
      message: "La région a bien été ajoutée.",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { addRegion };
