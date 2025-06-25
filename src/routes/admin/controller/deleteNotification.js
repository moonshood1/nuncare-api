const Notification = require("../../../models/Notification");

const deleteNotification = async (req, res, next) => {
  try {
    const { id } = req.query;

    const result = await Notification.findById(id);

    if (!result) {
      return res.status(400).json({
        success: false,
        message: "Notification introuvable",
      });
    }

    await Notification.deleteOne({
      _id: result._id,
    });

    return res.status(200).json({
      success: true,
      message: "La notification a été supprimée avec succès",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { deleteNotification };
