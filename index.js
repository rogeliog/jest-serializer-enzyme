var ShallowWrapper = require('enzyme/ShallowWrapper');

module.exports = {
  test(val) {
    return val.constructor && val.constructor.name === ShallowWrapper.name;
  },
  print(val) {
    if (val.debug() === '') {
      return 'null';
    }

    return val.debug();
  }
}
