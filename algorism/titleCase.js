console.log('title case');

const titleCase = (str) => {
  // const words = str.split(''); // 하나씩
  // const words = str.split(' '); // 띄어쓰기 따라
  const words = str.toLowerCase().split(' '); // 띄어쓰기 따라
  // console.log(words);
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}

const titleCaseMap = (str) => {
  const titled = str.toLowerCase().split(' ').map((elem) => {
    return elem[0].toUpperCase() + elem.slice(1);
  });
  return titled.join(' ');
}

// titleCase('I`m a little tea pot');
console.log(titleCaseMap('I`m a little tea pot'));
console.log(titleCase('I`m a little tea pot'));
let insideOut = ['sadness', 'anger'];
insideOut[0] = "happy"; // insideOut = ['joy', 'anger'];
let myName = 'joy';
// console.log(myName.slice(1)); // oy