const KycRequest = require("../../../models/Verification");

const getKycSubmissions = async ({ query }, res, next) => {
  try {
    let limit = query.limit ?? 10;
    let status = query.status ?? "PENDING";

    const requests = await KycRequest.find({
      status,
    })
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
  getKycSubmissions,
};
