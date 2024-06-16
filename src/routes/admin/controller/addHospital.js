const Hospital = require("../../../models/Hospital");
const _ = require("lodash");

const addHospital = async ({ user, body }, res, next) => {
  try {
    if (_.isEmpty(body.name)) {
      return res.status(400).json({
        success: false,
        message: "Le nom de l'hopital est requis",
      });
    }

    const hospital = await Hospital.findOne({
      name: body.name,
      city: body.city,
    });

    if (hospital) {
      return res.status(400).json({
        success: false,
        message: "Cet hopital existe déjà dans la base, veuillez la modifier",
      });
    }

    const { name, region, city, phone, img } = body;

    await Hospital.create({
      name,
      city,
      region,
      phone,
      img,
    });

    return res.status(200).json({
      success: true,
      message: "L'hopital a bien été ajouté.",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { addHospital };
