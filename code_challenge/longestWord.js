console.log('longest word');

const longestWordByFor = (str) => {
  let words = str.split(' ');
  let longest = '';
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
    // console.log(word);
    // console.log(longest);
  }
  return longest;
}

const longestWordOne = (str) => {
  return str.split(' ').sort((a, b) => {
    return b.length - a.length
  })[0];
}

const numbers = [1, 2, 3];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
for (let number of numbers) {
  console.log(number);
}

longestWordByFor('this quick brown fox jumped over the lazy dog');
longestWordOne('this quick brown fox jumped over the lazy dog');
console.log(longestWordByFor('this quick brown fox jumped over the lazy dog'));
console.log(longestWordOne('this quick brown fox jumped over the lazy dog'));