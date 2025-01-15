const Region = require("../../../models/Region");

const deleteRegion = async ({ body }, res, next) => {
  try {
    const { _id } = body;

    const result = await Region.findById(_id);

    if (!result) {
      return res.status(400).json({
        success: false,
        message: "Region introuvable",
      });
    }

    await Region.deleteOne({
      _id: result._id,
    });

    return res.status(200).json({
      success: true,
      message: "Region supprimée",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { deleteRegion };
