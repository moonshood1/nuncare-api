const Notification = require("../../../models/Notification");

const readNotification = async ({ body, user }, res, next) => {
  try {
    const notification = await Notification.findOne({
      _id: body.notificationId,
    });

    if (!notification) {
      return res.status(400).json({ message: "Notification non trouvée." });
    }

    await Notification.updateOne(
      { _id: body.notificationId },
      {
        $pull: {
          users: user._id,
        },
      }
    );

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  readNotification,
};
