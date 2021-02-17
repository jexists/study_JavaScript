console.log('팰린드롬/회문');
// 역순으로 읽어도 같은 말이 되는 말

const palindromeWord = (str) => {
  let reversed = str.split('').reverse().join('');
  // console.log(reversed);
  // if (reversed === str) return true;
  // return false;
  return reversed === str ? true : false;
}

// palindrome('racecar');
console.log(palindromeWord('race Car'));


const palindromeByRegex = (str) => {
  const reg = /[\W_]/g;
  //non word를 표현하며 알파벳 + 숫자 + _ 가 아닌 문자를 의미
  let smallStr = str.toLowerCase().replace(reg, '');
  console.log('smallStr =', smallStr);

  let reversed = smallStr.split('').reverse().join('');
  // console.log(reversed);
  // if (reversed === str) return true;
  // return false;
  return reversed === smallStr ? true : false;
}

// palindrome('racecar');
console.log(palindromeByRegex('ra_ce Car_*'));
