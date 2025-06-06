const District = require("../../../models/District");

const addDistrict = async ({ body }, res, next) => {
  try {
    const district = await District.findOne({
      name: body.name,
    });

    if (district) {
      return res.status(400).json({
        success: false,
        message: "Ce district existe déjà dans la base, veuillez le modifier",
      });
    }

    const { name } = body;

    await District.create({
      name,
    });

    return res.status(200).json({
      success: true,
      message: "Le district a été ajouté avec succès",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { addDistrict };
