solution([[1, 2], [2, 3]], [[3, 4], [5, 6]])

// https://school.programmers.co.kr/learn/courses/30/lessons/12950?language=javascript
// 행렬의 덧셈
// 문제 설명
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

// My Code
function solution(arr1, arr2) {
    var answer = [];
    
    for (let i = 0; i < arr1.length; i++) {
        answer.push([]);
        for(let j=0; j < arr1[i].length; j++) {
            answer[i].push(arr1[i][j] + arr2[i][j]);
        }
    }
    return answer;
}

// 다른사람 코드 ========================
function sumMatrix(A,B){
    return A.map((a,i) => a.map((b, j) => b + B[i][j]));
}