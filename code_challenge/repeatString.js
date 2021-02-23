
const repeatString = ((str, num) => {
  if (num < 0) return '';
  return str.repeat(num);
});

console.log(repeatString('abc', 3));


const repeatStringByFor = ((str, num) => {
  let final = '';
  if (num < 0) return '';
  for (let i = 0; i < num; i++) {
    final += str;
  }
  return final;
});

console.log(repeatStringByFor('abc', 3));
