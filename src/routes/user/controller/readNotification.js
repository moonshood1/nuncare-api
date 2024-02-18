const Notification = require("../../../models/Notification");

const readNotification = async ({ user, params }, res, next) => {
    try {
        await Notification.updateOne(
            {
                _id: params.id,
            },
            { $push: { users: user._id } }
        );

        return res.status(200).json({
            success: true,

        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = {
    readNotification,
};