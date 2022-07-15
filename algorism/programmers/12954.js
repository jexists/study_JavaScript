// https://school.programmers.co.kr/learn/courses/30/lessons/12954

// [문제 설명]
// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// [제한 조건]
// x는 -10000000 이상, 10000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다.

// My Answer
function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
      let num = x * i;
      answer.push(num);
      // answer.push(x*i)
  }
  return answer;
}

// 다른사람 코드 ========================
function solution(x, n) {
  return Array(n).fill(x).map((v, i) => (i + 1) * v)
}

function solution(x, n) {
    var answer = [];
    var a = 0;
  for(var i = 0; i < n; i++){
    a += x;
    answer.push(a);
  }
  return answer;
}