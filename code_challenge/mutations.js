
const mutation = (arr) => {
  let first = arr[0].toLowerCase();
  let second = arr [1].toLowerCase();

  for (let i = 0; i < second.length; i++) {
    // console.log(second[i]);
    if (first.indexOf(second[i]) === -1) return false;
  }
  return true;
}
mutation(['hello', 'hey']);
console.log(mutation(['hello', 'hey'])); //false
console.log(mutation(['hello', 'he'])); //true

const mutationForof = (arr) => {
  let first = arr[0].toLowerCase();
  let second = arr [1].toLowerCase();

  for (let letter of second) {
    if (first.indexOf(letter) === -1) return false;
  }
  return true;
}

console.log('mutationForof');
console.log(mutationForof(['hello', 'hey'])); //false
console.log(mutationForof(['hello', 'he'])); //true

const mutationInclude = (arr) => {
  let first = arr[0].toLowerCase();
  let second = arr [1].toLowerCase();

  for (let letter of second) {
    if (!first.includes(letter)) return false;
  }
  return true;
}

console.log('mutationInclude');
console.log(mutationInclude(['hello', 'hey'])); //false
console.log(mutationInclude(['hello', 'he'])); //true

const greeting = 'hello';
// console.log(greeting.indexOf('e')); //1
// console.log(greeting.indexOf('o')); //4
// console.log(greeting.indexOf('z')); //-1
// console.log(greeting.indexOf('z') === -1); //true