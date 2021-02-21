const confirmEnding = (str, target) => {
  // if (str.endsWith(target)) {
  //   return true
  // }
  // return false;

  // return str.endsWith(target) ? true : false;

  return str.endsWith(target); // 마지막 단어
}

const endingSubstr = (str, target) => {
  return str.substr(-target.length) === target;
  // if (str.substr(-target.length) === target){
  //   console.log(str.substr(-target.length));
  //   return true;
  // }
  // return false;
}


const sentence = 'I`m running in 5 miniutes.'
// console.log(sentence.substr(0, 5)); 
// I`m r
// console.log(sentence.substr(4)); 
// running in 5 miniutes.
// console.log(sentence.substr(-4)); 
// tes.

const endingSlice = (str, target) => {
  console.log(str.slice(-target.length));
  return str.slice(-target.length) === target;
}


// console.log(confirmEnding('bastian', 'n')); //true
// console.log(confirmEnding('bastian', 'r')); //false
// console.log(endingSubstr('bastian', 'ian')); //true
console.log(endingSlice('bastian', 'ian')); //true