const Notification = require("../../../models/Notification");
const _ = require("lodash");

const updateNotification = async (req, res, next) => {
  try {
    const { body, query } = req;

    const notification = await Notification.findById(query.id);

    if (!body.img) {
      body.img = ad.img;
    }

    const updatedNotification = _.assign(notification, { ...body });

    await updatedNotification.save();

    return res.status(200).json({
      success: true,
      message: "Les données de la Notification ont bien été modifiées",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { updateNotification };
