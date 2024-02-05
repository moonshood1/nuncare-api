const Instance = require("../../../models/Instance");
const _ = require("lodash");

const getInstanceWithPosition = async ({ query }, res, next) => {
  try {
    const { type, lng, lat } = query;

    const radius = 1;
    const kilometersToRadian = 6371;

    const instances = await Instance.find({
      type: type,
      location: {
        $geoWithin: {
          $centerSphere: [[lng, lat], radius / kilometersToRadian],
        },
      },
    });

    return res.status(200).json({
      success: true,
      instances,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getInstanceWithPosition,
};
