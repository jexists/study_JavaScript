

const replace = (str, before, after) => {
  return str.replace(before, after);
}

replace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped');

let sentence = 'I love hiking';
sentence = sentence.replace('hiking', 'sleep');
console.log(sentence);

console.log(replace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped'));