const City = require("../../../models/City");

const deleteCity = async ({ query }, res, next) => {
  try {
    const { id } = query;

    const result = await City.findById(id);

    if (!result) {
      return res.status(400).json({
        success: false,
        message: "Ville introuvable",
      });
    }

    await City.deleteOne({
      _id: result._id,
    });

    return res.status(200).json({
      success: true,
      message: "Ville supprimée",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { deleteCity };
