const admin = require("firebase-admin");

const getDoctors = async ({ user, query }, res, next) => {
  try {
    const db = admin.firestore();

    let doctorsQuery = db
      .collection("Users")
      .where(admin.firestore.FieldPath.documentId(), "!=", user.firebaseId);

    if (query.limit) {
      doctorsQuery = doctorsQuery.limit(Number(query.limit));
    }

    const snapshot = await doctorsQuery.get();

    const doctors = [];

    snapshot.forEach((doc) => {
      doctors.push(doc.data());
    });

    return res.status(200).json({ success: true, doctors });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getDoctors,
};
