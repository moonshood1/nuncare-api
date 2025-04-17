const User = require("../../../models/User");
const admin = require("firebase-admin");

const register = async ({ body }, res, next) => {
  try {
    // Vérifier si l'utilisateur existe déjà dans Firebase Authentication
    const existingUser = await admin
      .auth()
      .getUserByEmail(body.email)
      .catch(() => null);
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message:
          "Un utilisateur avec cet email existe déjà dans la base de données (001) ",
      });
    }

    // Vérifier si l'utilisateur existe déjà dans Firestore
    const firestoreUser = await admin
      .firestore()
      .collection("Users")
      .where("email", "==", body.email)
      .get();
    if (!firestoreUser.empty) {
      return res.status(400).json({
        success: false,
        message: "Cet email est déjà utilisé dans la base de données (002)",
      });
    }

    const mongoUser = await User.findOne({ email: body.email });
    if (mongoUser) {
      return res.status(400).json({
        success: false,
        message: "Cet email est déjà utilisé dans la base de données (003)",
      });
    }

    const userRecord = await admin.auth().createUser({
      email: body.email,
      password: body.password,
    });

    await admin.firestore().collection("Users").doc(userRecord.uid).set({
      uid: userRecord.uid,
      email: body.email,
    });

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
      address: "",
      lat: 0,
      lng: 0,
      orderNumber: body.orderNumber,
      isActive: true,
      deviceId: "",
      promotion: body.promotion,
      // district: "",
      region: body.region,
      city: body.city,
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
