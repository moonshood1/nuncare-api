const Admin = require("../../../models/Admin");
const { generateToken } = require("../../../services/auth");
// const { validationResult } = require("express-validator");
const _ = require("lodash");

const login = async (req, res, next) => {
  try {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }

    const { email, password } = req.body;

    if (_.isEmpty(email))
      return res
        .status(400)
        .json({ success: false, message: "Entrez une adresse email valide" });

    if (_.isEmpty(password))
      return res
        .status(400)
        .json({ success: false, message: "Entrez un mot de passe valide" });

    const user = await Admin.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Administrateur non trouvé" });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Mot de passe incorrecte" });
    }

    const token = generateToken(user);

    return res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { login };
