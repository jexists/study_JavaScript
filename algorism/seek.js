
// const destroyer = (arr) => {
//   console.log(arr); //[1, 2, 3, 1, 2, 3]
//   console.log(arguments);
//   return arr;
// }


function destroyer(arr) {
  // console.log(arguments);
  // console.log(arr); //[1, 2, 3, 1, 2, 3]
  // const args = Array.from(arguments);
  // console.log(args); //[Array(6), 2, 3]
  // const targets = args.slice(1);
  // console.log(targets); //[Array(6), 2, 3]gets2); //[Array(6)]
  var args = Array.from(arguments);
  args.splice(0, 1);
  var targets = args;
  console.log(targets); //[2,3]
  var result = [];

  for (var num of arr) {
    // console.log(num);
    if (targets.indexOf(num) === -1) {
      result.push(num)
    }
  }

  return result; //[2, 3]
}

// const targets2 = args.slice(0, 1);
// console.log(tar
destroyer([1, 2, 3, 1, 2, 3,], 2, 3); //[1, 1]
console.log(destroyer([1, 2, 3, 1, 2, 3,], 2, 3));

function destroyerFilter(arr) {
  var args = Array.from(arguments);
  args.splice(0, 1);
  var targets = args;
  var result = [];

  return arr.filter((num) => {
    return targets.indexOf(num) === -1;
  })
}
console.log(destroyerFilter([1, 2, 3, 1, 2, 3,], 2, 3));