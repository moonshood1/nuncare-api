const User = require("../../../models/User");
const bcrypt = require("bcrypt");

const updatePassword = async ({ user, body }, res, next) => {
    try {

        const isPasswordValid = await bcrypt.compare(body.oldPassword, user.password);


        if (!isPasswordValid) {
            return res.status(400).json({
                success: false,
                message: "Le mot de passe actuel est incorrecte",
            });
        }


        const hashedPassword = await bcrypt.hash(body.newPassword, 10);

        await User.updateOne(
            {
                _id: user._id,
            },
            {
                $set: {
                    password: hashedPassword,
                },
            }
        );

        return res.status(200).json({
            success: true,
            message: "Votre mot de passe a été modifié avec succès",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = {
    updatePassword,
};