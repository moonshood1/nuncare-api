const { getDoctors } = require("./getDoctors");
const { getInstanceWithPosition } = require("./getInstanceWithPosition");
const { getInstances } = require("./getInstances");
const { searchDoctors } = require("./searchDoctor");
const { searchInstances } = require("./searchInstance");


module.exports = {
  searchInstances,
  getInstanceWithPosition,
  getInstances,
  getDoctors,
  searchDoctors
};
