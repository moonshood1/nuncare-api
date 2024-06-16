const City = require("../../../models/City");

const addCity = async ({ user, body }, res, next) => {
  try {
    const city = await City.findOne({
      name: body.name,
    });

    if (city) {
      return res.status(400).json({
        success: false,
        message: "Cette ville  existe déjà dans la base, veuillez la modifier",
      });
    }

    const { name, region } = body;

    await City.create({
      name,
      region,
    });

    return res.status(200).json({
      success: true,
      message: "La ville a bien été ajoutée.",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { addCity };
