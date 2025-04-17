const Ad = require("../../../models/Ad");

const deleteAds = async (req, res, next) => {
  try {
    const { query } = req;

    const result = await Ad.findById(query.id);

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
