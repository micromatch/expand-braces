'use strict';

var braces = require('braces');

module.exports = function expand(val) {
  val = Array.isArray(val) ? val : [val];
  var len = val.length;
  var arr = [];
  var i = 0;

  while (i < len) {
    arr = arr.concat(braces(val[i++]));
  }
  return arr;
};
