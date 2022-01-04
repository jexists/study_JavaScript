console.log('스크립트 연결 완료!')

// Array 역순 정렬
const array = ['h', 'e', 'l', 'l', 'o'];
console.log('Hello', random.reverse());

// Array 역순 정렬 복사 (원본배열 유지 & 리턴값만 변경)
// -> spread operator(전개 연산사) 사용
const copyArray = [...array].reverse;


const reverseString = (str) => {
  // split = 문자열 -> 배열
  const stringArray = str.split('');
  // reverse = 배열 역순 변경
  const reverseArray = stringArray.reverse();
  // join = 배열 -> 문자열
  // const reverseString = reverseArray.join(); // ,포함
  const reverseString = reverseArray.join('');
  return reverseString;
}

// 한번에 적기
const reverseStringOneStep = (str) => {
  return str.split('').reverse().join('');
}

// for문 사용
const reverseStringByFor = (str) => {
  let final = '';
  for (let i = str.length - 1; i >=0; i--) {
    console.log(str[i]);
    final += str[i];
  }
  return final;
}



console.log(reverseString('abcdefg'));
console.log(reverseStringOneStep('12345678'));
console.log(reverseStringByFor('ㄱㄴㄷㄹㅁ'));
