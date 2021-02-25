

const chunkyBySlice = (arr, size) => {
  let groups = [];
  while (arr.length > 0) {
    groups.push(arr.slice(0, size))
    arr = arr.slice(size);
  }
  return groups;
}
// chunky(['a', 'b', 'c', 'd'], 2);
// console.log(chunkyBySlice(['a', 'b', 'c', 'd'], 2));

const chunkyBySplice = (arr, size) => {
  let groups = [];
  while (arr.length > 0) {
    groups.push(arr.splice(0, size))
    // arr = arr.slice(size);
  }
  return groups;
}
console.log(chunkyBySplice(['a', 'b', 'c', 'd'], 2));


let letters = ['a', 'b', 'c', 'd'];
console.log(letters.slice(0, 2)); // ['a', 'b']
console.log(letters.slice(2, 4)); // ['c', 'd']

console.log(letters.splice(0, 2)); // ['a', 'b']