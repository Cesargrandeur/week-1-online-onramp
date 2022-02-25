function divisible(a) {
  let result = [];
  for (let i of a) {
    if (i % 2 === 0 && i > 15) {
      result.push(i);
    }
  }
  return result.length;
}

module.exports = divisible;
