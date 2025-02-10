const User = require("../../../models/User");
const admin = require("firebase-admin");

const login = async ({ body }, res, next) => {
  try {
    console.log({ body });

    const userLog = await admin.auth().getUserByEmail(body.email);

    if (!userLog) {
      return res.status(401).json({
        success: false,
        message: "Utilisateur non trouvé",
      });
    }
    const customToken = await admin.auth().createCustomToken(userLog.uid);

    return res.status(200).json({
      success: true,
      token: customToken,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
};
