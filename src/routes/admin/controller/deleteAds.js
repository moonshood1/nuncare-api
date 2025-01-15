const Ad = require("../../../models/Ad");

const deleteAds = async ({ body }, res, next) => {
  try {
    const { _id } = body;

    const result = await Ad.findById(_id);

    if (!result) {
      return res.status(400).json({
        success: false,
        message: "Publicité introuvable",
      });
    }

    await Ad.deleteOne({
      _id: result._id,
    });

    return res.status(200).json({
      success: true,
      message: "Publicité supprimée",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { deleteAds };
