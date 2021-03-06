
const getIndexToIns = (arr, num) => {
  console.log(arr); // [40, 60, 5]

  arr.sort((a,b) => {
    return a - b;
  });
  console.log(arr); // [5, 40, 60]

  for (let i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      return i;
    } 
  }
  return arr.length;
}

getIndexToIns([40, 60, 5], 50);
console.log(getIndexToIns([40, 60, 5], 50)); //2
console.log(getIndexToIns([2, 5, 10], 50)); //3

const things = ['a', 'c', 'b', 2, 19, 1];
console.log(things.sort()); //[1, 19, 2, 'a', 'b', 'c']
//alphabetically, number(first)