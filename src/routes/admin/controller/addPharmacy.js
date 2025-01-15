const Pharmacy = require("../../../models/Pharmacy");
const _ = require("lodash");

const addPharmacy = async ({ body }, res, next) => {
  try {
    if (_.isEmpty(body.name)) {
      return res.status(400).json({
        success: false,
        message: "Le nom de la pharmacie est requis",
      });
    }

    const pharmacy = await Pharmacy.findOne({
      name: body.name,
      city: body.city,
    });

    if (pharmacy) {
      return res.status(400).json({
        success: false,
        message: "Cet hopital existe deja dans la base, veuillez la modifier",
      });
    }

    const { name, region, city, phone, img } = body;

    await Pharmacy.create({
      name,
      city,
      region,
      phone,
      img,
    });

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { addPharmacy };
