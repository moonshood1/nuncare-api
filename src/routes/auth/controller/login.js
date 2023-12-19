const login = ({ body }, res, next) => {
  try {
    const { email, password } = body;

    if (email !== "louisrogerguirika@gmail.com") {
      return res.status(400).json({
        error: true,
        message: "Utilisateur inconnu",
      });
    }

    if (password !== "12345678") {
      return res
        .status(400)
        .json({ error: true, message: "Mot de passe incorrecte" });
    }

    return res.status(200).json({
      success: true,
      message: "Connexion établie",
      token: Date.now(),
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  login,
};
