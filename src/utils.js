function getTreeObjValue(data, stepArr = []) {
  if (!data) {
    return data;
  }
  let result = data,
    cache = data;

  stepArr.forEach((key) => {
    result = result && cache[key];
    cache = cache[key];
  });

return result;
}

module.exports = {getTreeObjValue};