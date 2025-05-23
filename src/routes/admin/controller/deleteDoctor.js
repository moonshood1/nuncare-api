const User = require("../../../models/User");

const deleteDoctor = async ({ query }, res, next) => {
  try {
    const { id } = body;

    const result = await User.findById(id);

    if (!result) {
      return res.status(400).json({
        success: false,
        message: "Docteur introuvable",
      });
    }

    // await User.deleteOne({
    //   _id: result._id,
    // });

    await User.updateOne(
      {
        _id: result._id,
      },
      {
        $set: {
          isActive: false,
        },
      }
    );

    // TO DO : Supprimer dans Firebase

    return res.status(200).json({
      success: true,
      message: "Docteur desactivé",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { deleteDoctor };
