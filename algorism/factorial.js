console.log('팩토리얼/계승');
// n! = 1x2x...x(n-1)x(n)

const factorial = (n) => {
  const int = n;
  let factorial = 1;
  for (let i = 1; i <= int; i++) {
    // console.log(n);
    factorial *= n;
    n--;
  }
  return factorial;
}

console.log(factorial(8)); //40320

//////////////////////////////////////////
const answer = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    // result = result * i;
    result *= i;
  }
  return result;
}

console.log(answer(8)); //40320

