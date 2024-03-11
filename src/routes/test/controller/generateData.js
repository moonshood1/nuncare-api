const User = require('../../../models/User')

const generateData = async (req, res, next) => {
    try {
        await User.updateMany({
            cover: null
        }, {
            $set: {
                cover: 'https://res.cloudinary.com/dhc0siki5/image/upload/v1710070252/nuncare/placeholder_snnviz.png'
            }
        })

        await User.updateMany({
            img: null
        }, {
            $set: {
                img: 'https://res.cloudinary.com/dhc0siki5/image/upload/v1710070251/nuncare/person_i8vdce.jpg'
            }
        })

        return res.status(200).json({
            success: true,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = {
    generateData,
};