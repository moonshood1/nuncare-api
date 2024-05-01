const admin = require("firebase-admin");

const searchDoctors = async ({ body, user }, res, next) => {
  try {
    const searchText = body.searchText;

    const usersRef = admin.firestore().collection("Users");

    const querySnapshot = await usersRef
      .where("_id", "!=", user._id)
      .where("firstName", ">=", searchText)
      .where("firstName", "<=", searchText + "\uf8ff")
      .get();

    const doctors = [];
    querySnapshot.forEach((doc) => {
      doctors.push(doc.data());
    });

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
  searchDoctors,
};
