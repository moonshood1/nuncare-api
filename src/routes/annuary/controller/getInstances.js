const Instance = require("../../../models/Instance");

const getInstances = async ({ query }, res, next) => {
  try {
    const instances = await Instance.find({ type: query.type })
      .sort({ createdAt: -1 })
      .limit(query.size);

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
  getInstances,
};
