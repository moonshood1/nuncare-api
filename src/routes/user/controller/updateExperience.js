const User = require("../../../models/User");
const _ = require("lodash");

const updateExperience = async ({ user, body }, res, next) => {
    try {
        const u = await User.findOne({
            _id: user._id,
        });

        if (_.includes(u.experiences, body.experience)) {
            return res.status(400).json({
                success: false,
                message:
                    "L'expérience que vous voulez ajouter existe deja dans votre tableau d'experience",
            });
        }

        await User.updateOne(
            { _id: user._id },
            { $push: { experiences: body.experience } }
        );

        return res.status(200).json({
            success: true,
            message: "L'expérience a bien été ajoutée",
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            message: "Une erreur s'est produite lors de  l'ajout de  l'experience",
        });
    }
};

module.exports = {
    updateExperience,
};