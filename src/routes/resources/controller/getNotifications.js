const Notification = require("../../../models/Notification");

const getNotifications = async ({ user }, res, next) => {
  try {
    const notifications = await Notification.find({
      users: { $in: [user._id] },
    }).select("-users");

    return res.status(200).json({
      success: true,
      notifications,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getNotifications,
};
