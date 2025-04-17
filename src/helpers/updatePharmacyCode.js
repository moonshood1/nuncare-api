const Code = require("../models/PharmaCode");
const _ = require("lodash");

const updatePharmacyCode = async (code) => {
  try {
    await Code.updateOne(
      {},
      {
        $set: {
          code: `PHARMA-${code}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  updatePharmacyCode,
};
