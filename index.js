var ShallowWrapper = require('enzyme/ShallowWrapper');

module.exports = {
  test(val) {
    return val.constructor && val.constructor.name === ShallowWrapper.name;
  },
  print(val, serialize, indent) {
    return val.debug();
  }
}
