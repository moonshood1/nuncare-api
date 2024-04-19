const User = require("../../../models/User");
const _ = require("lodash");

const updateSkill = async ({ user, body }, res, next) => {
  try {
    const u = await User.findOne({
      _id: user._id,
    });

    if (_.includes(u.skills, body.skill)) {
      return res.status(400).json({
        success: false,
        message:
          "La compétence que vous voulez ajouter existe deja dans votre tableau de compétences",
      });
    }

    if (_.size(u.skills) >= 6) {
      return res.status(400).json({
        success: false,
        message:
          "Vous ne pouvez pas ajouter plus de 6 compétences dans votre tableau",
      });
    }

    await User.updateOne({ _id: user._id }, { $push: { skills: body.skill } });

    return res.status(200).json({
      success: true,
      message: "La compétence a bien été ajoutée",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Une erreur s'est produite lors de  l'ajout de  la compétence",
    });
    next(error);
  }
};

module.exports = {
  updateSkill,
};
