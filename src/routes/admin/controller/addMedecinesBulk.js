const Medecine = require("../../../models/Medecine");

const addMedecineBulk = async ({ body }, res, next) => {
  try {
    const { medecines } = body;

    for (const med of medecines) {
      try {
        const medecine = await Medecine.findOne({ name: med.name });

        if (medecine) {
          console.log("Médicament déjà présent dans la base :", medecine.name);
          continue;
        }

        const { code, name, group, dci, category, regime, img, price } = med;

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

        console.log("Médicament créé :", name);
      } catch (error) {
        console.log("Erreur lors de l'ajout du médicament :", med.name);
      }
    }

    return res.status(200).json({
      success: true,
      message: "Les médicaments ont bien été ajoutés.",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { addMedecineBulk };
