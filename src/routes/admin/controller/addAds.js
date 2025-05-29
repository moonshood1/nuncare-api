const Ad = require("../../../models/Ad");

const addAds = async ({ user, body }, res, next) => {
  try {
    const add = await Ad.findOne({
      label: body.labe,
    });

    if (add) {
      return res.status(400).json({
        success: false,
        message:
          "Une publicité avec ce titre existe deja , veuillez la modifier",
      });
    }

    if (body.img === "" || body.label === "" || body.company === "") {
      return res.status(400).json({
        success: false,
        message:
          "Vous ne pouvez pas ajouter une publicité sans image , sans titre ou sans compagnie",
      });
    }

    const { label, img, company, description, websiteLink } = body;

    await Ad.create({
      label,
      img,
      company,
      description,
      websiteLink,
      createdBy: user._id,
    });

    return res.status(200).json({
      success: true,
      message: "La publicité a bien été ajoutée.",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { addAds };
