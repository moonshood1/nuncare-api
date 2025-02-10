const Deletion = require("../../../models/AccountDeletion");
const _ = require("lodash");

const getDeletionRequests = async ({ query }, res, next) => {
  try {
    let limit = query.limit ?? 10;

    const requests = await Deletion.find({})
      .limit(limit)
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      requests,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getDeletionRequests,
};
