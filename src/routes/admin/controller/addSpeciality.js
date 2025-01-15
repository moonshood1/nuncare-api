const Speciality = require("../../../models/Speciality");

const addSpeciality = async ({ body }, res, next) => {
  try {
    const speciality = await Speciality.findOne({
      name: body.name,
    });

    if (speciality) {
      return res.status(400).json({
        success: false,
        message:
          "Cette spécialité existe déjà dans la base, veuillez la modifier",
      });
    }

    const { name } = body;

    await Speciality.create({
      name,
    });

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { addSpeciality };
