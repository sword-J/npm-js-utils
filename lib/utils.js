"use strict";

function getTreeObjValue(data) {
  var stepArr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!data) {
    return data;
  }
  var result = data,
      cache = data;

  stepArr.forEach(function (key) {
    result = result && cache[key];
    cache = cache[key];
  });

  return result;
}

module.exports = { getTreeObjValue: getTreeObjValue };