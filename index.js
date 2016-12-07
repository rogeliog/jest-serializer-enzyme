var ShallowWrapper = require('enzyme/ShallowWrapper');
var ReactWrapper = require("enzyme/ReactWrapper");

module.exports = {
  test(val) {
    return (val.constructor && (
      (val.constructor.name === ShallowWrapper.name)
      || (val.constructor.name === ReactWrapper.name)
    );
  },
  print(val, serialize, indent) {
    return val.debug();
  }
}
