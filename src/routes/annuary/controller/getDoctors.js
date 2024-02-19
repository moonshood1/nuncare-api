const Doctor = require("../../../models/User");
const Article = require("../../../models/Article")
const Notif = require("../../../models/Notification")
const _ = require('lodash')

const getDoctors = async ({ user, query }, res, next) => {
  try {
    const doctors = await Doctor.find({ _id: { $ne: user._id } })
      .sort({ createdAt: -1 })
      .limit(query.size);


    let articles = [];

    for (let i = 0; i < doctors.length; i++) {
      articles = await Article.find({
        author: doctors[i]._id,
        isActive: true,
      });

      _.assign(doctors[i].articles, articles)
    }

    return res.status(200).json({
      success: true,
      doctors,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getDoctors,
};
