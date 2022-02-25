function noOfElements(x, y, z) {
  let result = [];
  for (let i of x) {
    if (i >= y && i <= z) {
      result.push(i);
    }
  }
  return result.length;
}

module.exports = noOfElements;
