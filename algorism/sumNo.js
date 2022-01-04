
const sumAll = (arr) => {
  let start = Math.min(arr[0], arr[1]);
  let end = Math.max(arr[0], arr[1]);
  let total = 0;

  console.log(start, end);
  for(let i = start; i <= end; i++) {
    total += i;
  }
  return total
}

console.log(sumAll([1, 4]));//10
console.log(sumAll([3, 2]));//5
console.log(sumAll([8, 4]));//30

