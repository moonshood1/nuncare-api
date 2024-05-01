const Hospital = require("../../../models/Hospital");
const _ = require("lodash");

const localizeHospitals = async ({ query }, res, next) => {
  try {
    const radius = 10;

    let convertedLng = parseFloat(query.lng);
    let convertedLat = parseFloat(query.lat);

    let hospitals = await Hospital.find({
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

    if (_.isEmpty(hospitals)) {
      hospitals = await Hospital.find({}).sort({
        createdAt: -1,
      });
    }

    return res.status(200).json({
      success: true,
      hospitals,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  localizeHospitals,
};
