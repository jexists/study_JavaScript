

const translateLatin = (str) => {
  const firstVowel = str.match(/[aeiou]/);
  const firstPosition = str.indexOf(firstVowel);

  console.log(firstVowel);
  console.log(firstPosition);

  if (firstPosition > 0) {
    return str.slice(firstPosition) + str.slice(0, firstPosition) + 'ay';
  }
  return str + 'way';
}
console.log(translateLatin('consonant'));

const translateLatinFunction = (str) => {

  let firstPosition = findFirstVowel(str);
  console.log(firstPosition);

  if (firstPosition > 0) {
    return str.slice(firstPosition) + str.slice(0, firstPosition) + 'ay';
  }
  return str + 'way';
}

const findFirstVowel = (str) => {
  for (let i = 0; i < str.length; i++) {
    if ('aeiou'.indexOf(str[i]) !== -1) {
      return i;
    }
  }
}

console.log(translateLatinFunction('consonant'));