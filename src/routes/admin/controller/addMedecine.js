const Medecine = require("../../../models/Medecine");

const addMedecine = async (req, res, next) => {
  try {
    const medecine = await Medecine.findOne({
      label: body.label,
    });

    if (medecine) {
      return res.status(400).json({
        success: false,
        message:
          "Un médicament avec ces références existe deja , veuillez le modifier",
      });
    }

    if (body.code === "" || body.name === "" || body.group === "") {
      return res.status(400).json({
        success: false,
        message:
          "Vous ne pouvez pas ajouter un médicament sans code , sans libellé ou sans groupe",
      });
    }

    const { code, name, group, dci, category, regime, img, price } = body;

    await Medecine.create({
      code,
      name,
      group,
      dci,
      category,
      regime,
      img,
      price,
    });

    return res.status(200).json({
      success: true,
      message: "Le médicament a bien été ajouté.",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { addMedecine };
