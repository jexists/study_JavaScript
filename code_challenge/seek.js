
// const destroyer = (arr) => {
//   console.log(arr); //[1, 2, 3, 1, 2, 3]
//   console.log(arguments);
//   return arr;
// }


function destroyer(arr) {
  console.log(arguments);
}
destroyer([1, 2, 3, 1, 2, 3,], 2, 3); [1, 1]