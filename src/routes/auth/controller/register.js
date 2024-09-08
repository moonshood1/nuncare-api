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
      sex: body.sex,
      hospital: body.hospital,
      speciality: body.speciality,
      university: body.university,
      countryUniversity:
        body.university == "Autre" ? body.countryUniversity : "CI",
      specialities: body.specialities,
      years: body.years,
      img: "https://res.cloudinary.com/dhc0siki5/image/upload/v1710070251/nuncare/person_i8vdce.jpg",
      phone: body.phone,
      city: "",
      address: "",
      lat: 0,
      lng: 0,
      orderNumber: body.orderNumber,
      isActive: true,
      deviceId: "",
      promotion: body.promotion,
      district: "",
      region: body.region,
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
    } else {
      return res.status(400).json({
        success: false,
        message:
          "Une erreur s'est produite lors de l'inscription , veuillez réessayer plus tard",
      });
    }
  }
};

module.exports = {
  register,
};
