const Code = require("../models/PharmaCode");
const _ = require("lodash");

const generatePharmacyUniqueCode = async () => {
  try {
    const lastcode = await Code.findOne({});

    const codeValue = _.last(_.split(lastcode.code, "-"));

    return Number(codeValue);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  generatePharmacyUniqueCode,
};
