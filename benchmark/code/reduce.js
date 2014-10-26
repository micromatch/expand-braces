'use strict';

var braces = require('braces');

module.exports = function expand(val) {
  val = Array.isArray(val) ? val : [val];

  return val.reduce(function (acc, str) {
    return acc.concat(braces(str));
  }, []);
};
