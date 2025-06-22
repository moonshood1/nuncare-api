const Notification = require("../../../models/Notification");
const _ = require("lodash");

const getNotifications = async ({ query }, res, next) => {
  try {
    const limit = parseInt(query.limit) || 10;
    const page = parseInt(query.page) || 1;

    const notifications = await Notification.find({})
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Notification.countDocuments();

    return res.status(200).json({
      success: true,
      data: notifications,
      meta: {
        page,
        limit,
        totalPages: Math.ceil(total / limit),
        totalItems: total,
      },
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  getNotifications,
};
