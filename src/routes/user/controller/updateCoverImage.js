const User = require("../../../models/User");

const upateCoverImage = async ({ user, body }, res, next) => {
    try {
        await User.updateOne(
            {
                _id: user._id,
            },
            {
                $set: {
                    cover: body.newImg,
                },
            }
        );

        return res.status(200).json({
            success: true,
            message: "Votre image de couverture a été modifiée avec succès",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = {
    upateCoverImage,
};