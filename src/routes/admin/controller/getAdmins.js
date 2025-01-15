const _ = require("lodash");
const Admin = require("../../../models/Admin");
const Permission = require("../../../models/Permission");

const getAdmins = async (req, res, next) => {
  try {
    const admins = await Admin.find({}).sort({ createdAt: -1 });

    let adminPermissions = [];

    for (let i = 0; i < admins.length; i++) {
      for (let j = 0; j < admins[i].permissions.length; j++) {
        const permissionId = admins[i].permissions[j];

        const permission = await Permission.findById(permissionId);

        adminPermissions.push({
          _id: permission._id,
          label: permission.label,
          description: permission.description,
        });
      }
      admins[i].permissions = adminPermissions;
    }

    return res.status(200).json({
      success: true,
      admins,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getAdmins,
};
