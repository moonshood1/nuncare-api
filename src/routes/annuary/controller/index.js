const { getDoctors } = require("./getDoctors");
const { getInstanceWithPosition } = require("./getInstanceWithPosition");
const { getInstances } = require("./getInstances");
const { searchInstances } = require("./searchInstance");

module.exports = {
  searchInstances,
  getInstanceWithPosition,
  getInstances,
  getDoctors,
};
