const Doctor = require("../../../models/User");
const _ = require("lodash");

const getDoctorsWithPosition = async ({ user, query }, res, next) => {
  try {
    const radius = 10;

    console.log({
      lng: query.lng,
      lat: query.lat,
    });

    let convertedLng = parseFloat(query.lng);
    let convertedLat = parseFloat(query.lat);

    let doctors = await Doctor.find({
      _id: { $ne: user._id },
      lng: { $ne: null, $exists: true },
      lat: { $ne: null, $exists: true },
      $and: [
        { lng: { $lte: convertedLng + radius / 111.32 } },
        { lng: { $gte: convertedLng - radius / 111.32 } },
        {
          lat: {
            $lte:
              convertedLat +
              radius / (111.32 * Math.cos((convertedLat * Math.PI) / 180)),
          },
        },
        {
          lat: {
            $gte:
              convertedLat -
              radius / (111.32 * Math.cos((convertedLat * Math.PI) / 180)),
          },
        },
      ],
    }).sort({ createdAt: -1 });

    if (_.isEmpty(doctors)) {
      doctors = await Doctor.find({ _id: { $ne: user._id } }).sort({
        createdAt: -1,
      });
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
  getDoctorsWithPosition,
};
