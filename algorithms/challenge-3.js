function isDivisbleByN(arr, n) {
  let newArr = [];
  for (let i of arr) {
    if (i % n === 0) {
      newArr.push(i);
    }
  }
  return newArr;
}

module.exports = isDivisbleByN;
