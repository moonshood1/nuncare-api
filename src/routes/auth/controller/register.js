const User = require("../../../models/User");
const admin = require("firebase-admin");

const register = async ({ body }, res, next) => {
  try {
    const userRecord = await admin.auth().createUser({
      email: body.email,
      password: body.password,
    });

    await admin.firestore().collection("Users").doc(userRecord.uid).set({
      uid: userRecord.uid,
      email: body.email,
    });

    const userExists = await User.findOne({
      email: body.email,
      firebaseId: userRecord.uid,
    });

    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "Ces informations appartiennent à un utilisateur deja créé",
      });
    }

    await User.create({
      firebaseId: userRecord.uid,
      email: body.email,
      firstName: body.firstName,
      lastName: body.lastName,
      bio: "",
      sex: "",
      hospital: "",
      speciality: "",
      years: 0,
      img: "https://res.cloudinary.com/dhc0siki5/image/upload/v1710070251/nuncare/person_i8vdce.jpg",
      phone: "",
      city: "",
      address: "",
      lat: 0,
      lng: 0,
      orderNumber: "",
      isActive: true,
      hospital: "",
      phone: "",
      years: 0,
      deviceId: "",
    });

    return res.status(200).json({
      success: true,
      message: "Inscription réussie , veuillez vous connecter",
    });
  } catch (error) {
    console.log(error);
    if (error.code === "auth/email-already-exists") {
      return res.status(400).json({
        success: false,
        message: "L'adresse e-mail est déjà utilisée par un autre compte.",
      });
    }
    next(error);
  }
};

module.exports = {
  register,
};
