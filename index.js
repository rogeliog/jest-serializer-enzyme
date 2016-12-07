var ShallowWrapper = require('enzyme/ShallowWrapper');
var ReactWrapper = require("enzyme/ReactWrapper");

module.exports = {
  test(val) {
    if (!val || !val.constructor) return false;

    const doesMatch = (val.constructor.name === ShallowWrapper.name)
      || (val.constructor.name === ReactWrapper.name);

    return doesMatch;
  },
  print(val, serialize, indent) {
    return val.debug();
  }
}
