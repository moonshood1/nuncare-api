const admin = require("firebase-admin");

const localizeDoctors = async ({ query }, res, next) => {
  try {
    const radius = 10;

    const db = admin.firestore();
    const doctorRef = db.collection("Users");

    const convertedLng = parseFloat(query.lng);
    const convertedLat = parseFloat(query.lat);

    const lngLimit = radius / 111.32;
    const latLimit =
      radius / (111.32 * Math.cos((convertedLat * Math.PI) / 180));

    const doctorsQuery = doctorRef
      .where("lng", ">=", convertedLng - lngLimit)
      .where("lng", "<=", convertedLng + lngLimit)
      .where("lat", ">=", convertedLat - latLimit)
      .where("lat", "<=", convertedLat + latLimit);

    const snapshot = await doctorsQuery.get();

    const doctors = [];
    snapshot.forEach((doc) => {
      doctors.push(doc.data());
    });

    if (doctors.length === 0) {
      const allDoctorsSnapshot = await doctorRef.get();
      allDoctorsSnapshot.forEach((doc) => {
        doctors.push(doc.data());
      });
    }

    return res.status(200).json({
      success: true,
      doctors,
    });
  } catch (error) {
    console.error("Error fetching Doctors around:", error);
    next(error);
  }
};

module.exports = {
  localizeDoctors,
};
