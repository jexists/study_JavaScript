const diffArray = (arr1, arr2) => {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      result.push(arr1[i]);
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1) {
      result.push(arr2[j])
    }
  }
  return result;
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
console.log(diffArray([1, 2, 3], [4, 3, 6]))


let nums = [1, 2, 3, 4, 5];
console.log(nums.filter((num) => {
  return num > 3; //[4, 5]
}));

const diffArrayFilter = (arr1, arr2) => {
  let combo = arr1.concat(arr2);
  return combo.filter((num) => {
    if (arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1) {
      return num;
    }
  });
}

console.log(diffArrayFilter([1, 2, 3], [4, 3, 6]))
