const diffArray = (arr1, arr2) => {
   let result = [];

   for (let i = 0; i < arr1.length; i++) {
     if (arr2.indexOf(arr1[i]) === -1) {
       result.push(arr1[i]);
     }
   }
   for (let j = 0; j <arr2.length; j++) {
     if (arr1.indexOf(arr2[j]) === -1) {
       result.push(arr2[j])
     }
   }
   return result;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
console.log(diffArray([1, 2, 3], [4, 3, 6]))