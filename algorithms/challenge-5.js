function replaceDivisible(x, y) {
  let newArr = []
  for (let i of x)
  if (i % y === 0 ){
    newArr.push ("isDivisible")
  }else{
    newArr.push(i)
  }
  return newArr
}

module.exports = replaceDivisible
