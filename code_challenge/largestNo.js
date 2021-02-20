

const largestNo = (arr) => {
  const maxes = [];

  for (let i = 0; i < arr.length; i++) {
    var tempMax = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      let currentElement = arr[i][j];
      // console.log(arr[i][j]);
      if (currentElement >= tempMax) {
        tempMax = currentElement;
      }
    }
    maxes.push(tempMax);
    // console.log(arr[i]);
  }
  return maxes;
}
console.log(largestNo([[4, 5, 1, 3], [13, 27, 18, 26], [32, 34, 37, 39], [1000, 1002, 484, 1]]));

largestNo([[4, 5, 1, 3], [13, 27, 18, 26], [32, 34, 37, 39], [1000, 1002, 484, 1]])