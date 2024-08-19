const admin = require("firebase-admin");
const Doctor = require("../../../models/User");

const getDoctors = async ({ user }, res, next) => {
  try {
    const doctors = await Doctor.find({
      firebaseId: { $ne: user.firebaseId },
    })
      .sort({ createdAt: -1 })
      .limit(5);

    // const db = admin.firestore();

    // let doctorsQuery = db
    //   .collection("Users")
    //   .where(admin.firestore.FieldPath.documentId(), "!=", user.firebaseId);

    // if (query.limit) {
    //   doctorsQuery = doctorsQuery.limit(Number(query.limit));
    // }

    // const snapshot = await doctorsQuery.get();

    // const doctors = [];

    // snapshot.forEach((doc) => {
    //   doctors.push(doc.data());
    // });

    return res.status(200).json({ success: true, doctors });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getDoctors,
};
