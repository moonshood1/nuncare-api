const jwt = require("jsonwebtoken");
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

module.exports = {
  adminToken,
  userToken,
};
