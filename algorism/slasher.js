

const slasher = (arr, howMany) => {
  arr.splice(0, howMany);
  return arr;
}

slasher([1,2,3] ,2);

console.log(slasher([1,2,3], 2));
console.log(slasher(['a', 'b', 'c'], 1));

const arr = ['a', 'b', 'c', 'd'];

// console.log(arr.splice(0, 2)); //['a', 'b']
// console.log(arr); //['c', 'd']

// console.log(arr.slice(0, 2)); //['a', 'b']
// console.log(arr); //['a', 'b', 'c', 'd']