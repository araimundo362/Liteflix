/**
 * componentExists
 *
 */

const fs = require('fs');
const path = require('path');

const pageComponents = fs.readdirSync(path.join(__dirname, '../../components'));
const components = pageComponents;

module.exports = function componentExists(comp) {
  return components.indexOf(comp) >= 0;
};
