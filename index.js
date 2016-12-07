var ShallowWrapper = require('enzyme/ShallowWrapper');
var ReactWrapper = require("enzyme/ReactWrapper");

module.exports = {
  test(val) {
    // check for val.constructor to exist and if val.constructor.name
    // equals either the shallow wrapper name OR the react wrapper (mount) name.
    return (
      val.constructor && (
        (val.constructor.name === ShallowWrapper.name)
        || (val.constructor.name === ReactWrapper.name)
      )
    );
  },
  print(val, serialize, indent) {
    return val.debug();
  }
}
