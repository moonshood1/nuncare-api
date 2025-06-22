const Notification = require("../../../models/Notification");
const User = require("../../../models/User");
const _ = require("lodash");

const sendNotifications = async (req, res, next) => {
  try {
    let { title, message, type, img, link, users } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "La notification ne peut etre envoyée sans titre",
      });
    }
    if (!message) {
      return res.status(400).json({
        message: "La notification ne peut etre envoyée sans message",
      });
    }

    // if (type == "ALL") {
    const results = await User.find();
    users = _.map(results, "_id");
    // }

    await Notification.create({
      title,
      message,
      type,
      img,
      link,
      users,
    });

    return res.status(200).json({
      success: true,
      message: "Les notifications ont été envoyées avec succès",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  sendNotifications,
};
