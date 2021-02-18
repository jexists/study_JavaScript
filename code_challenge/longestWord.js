console.log('longest word');

const longestWord = (str) => {
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

const numbers = [1, 2, 3];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
for (let number of numbers) {
  console.log(number);
}

longestWord('this quick brown fox jumped over the lazy dog')