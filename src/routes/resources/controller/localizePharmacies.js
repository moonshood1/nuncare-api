const Pharmacy = require("../../../models/Pharmacy");
const _ = require("lodash");

const localizePharmacies = async ({ query }, res, next) => {
  try {
    const radius = 10;

    let convertedLng = parseFloat(query.lng);
    let convertedLat = parseFloat(query.lat);

    let pharmacies = await Pharmacy.find({
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

    if (_.isEmpty(pharmacies)) {
      pharmacies = await Pharmacy.find({}).sort({
        createdAt: -1,
      });
    }

    return res.status(200).json({
      success: true,
      pharmacies,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  localizePharmacies,
};
