

const largestNoByPush = (arr) => {
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
// console.log(largestNoByPush([[4, 5, 1, 3], [13, 27, 18, 26], [32, 34, 37, 39], [1000, 1002, 484, 1]]));
// largestNo([[4, 5, 1, 3], [13, 27, 18, 26], [32, 34, 37, 39], [1000, 1002, 484, 1]])

const largestNo = (arr) => {
  const maxes = [0, 0, 0, 0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let currentElement = arr[i][j];
      if (currentElement >= maxes[i]) {
        maxes[i] = currentElement;
      }
    }
  }
  return maxes;
}
// console.log(largestNo([[4, 5, 1, 3], [13, 27, 18, 26], [32, 34, 37, 39], [1000, 1002, 484, 1]]));

const findMax = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

const largestNoByFunction= (arr) => {
  const maxes = [];
  for (let i = 0; i < arr.length; i++) {
    let innerMax = findMax(arr[i]);
    maxes.push(innerMax);
  }
  return maxes;
}
console.log(largestNoByFunction([[4, 5, 1, 3], [13, 27, 18, 26], [32, 34, 37, 39], [1000, 1002, 484, 1]]));