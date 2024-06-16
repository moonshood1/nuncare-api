const Region = require("../../../models/Region");

const addRegion = async ({ user, body }, res, next) => {
  try {
    const region = await Region.findOne({
      name: body.name,
    });

    if (region) {
      return res.status(400).json({
        success: false,
        message: "Cette région  existe deja dans la base, veuillez la modifier",
      });
    }

    const { name } = body;

    await City.create({
      name,
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
