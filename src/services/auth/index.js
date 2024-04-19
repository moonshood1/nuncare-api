const jwt = require("jsonwebtoken");
const admin = require("firebase-admin");
const User = require("../../models/User");
const Admin = require("../../models/Admin");

const jwtSecret = process.env.JWT_SECRET;

const adminToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.log("Jeton Admin introuvable");
    return res
      .status(401)
      .json({ success: false, message: "Veuillez vous identifier" })
      .end();
  }

  const jeton = authHeader.split(" ")[1];

  jwt.verify(jeton, jwtSecret, async (err, a) => {
    if (err) {
      console.log("Jeton Admin invalide");
      return res
        .status(401)
        .json({ success: false, message: "Veuillez vous identifier" })
        .end();
    }
    const admin = await Admin.findOne({ _id: a.id });
    req.user = admin;
    next();
  });
};

const userToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const jeton = authHeader && authHeader.split(" ")[1];

  if (jeton === null) {
    console.log("Jeton Utilisateur introuvable");
    return res
      .status(401)
      .json({ success: false, message: "Veuillez vous identifier" })
      .end();
  }

  jwt.verify(jeton, jwtSecret, async (err, a) => {
    if (err) {
      console.log("Jeton utilisateur invalide ");

      return res
        .status(401)
        .json({ success: false, message: "Veuillez vous identifier" })
        .end();
    }

    const user = await User.findOne({ _id: a.id });
    req.user = user;
    next();
  });
};

const firebaseToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    console.log("Jeton Utilisateur introuvable");
    return res
      .status(401)
      .json({ success: false, message: "Veuillez vous identifier" });
  }

  admin
    .auth()
    .verifyIdToken(token)
    .then(async (decodedToken) => {
      const user = await User.findOne({ firebaseId: decodedToken.uid });
      req.user = user;
      next();
    })
    .catch((error) => {
      console.error("Erreur lors de la vérification du token Firebase:", error);
      return res
        .status(401)
        .json({ success: false, message: "Veuillez vous identifier" });
    });
};

module.exports = {
  adminToken,
  userToken,
  firebaseToken,
};
