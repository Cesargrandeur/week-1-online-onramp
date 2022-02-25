function highestSum(x, y) {
  let sumx = 0;
  let sumy = 0;

  for (let i of x) {
    sumx += i;
  }

  for (let i of y) {
    sumy += i;
  }

  if (sumx > sumy) {
    return sumx;
  } else {
    return sumy;
  }
}

module.exports = highestSum;
