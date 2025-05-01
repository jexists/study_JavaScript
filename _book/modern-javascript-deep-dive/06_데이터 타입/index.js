var binary = 0b01000001;
var octal = 0o101;
var hex = 0x41;
var num = 65;

console.log(binary); // 65
console.log(octal); // 65
console.log(hex); // 65
console.log(num); // 65
console.log(binary === octal); // true
console.log(binary === num); // true

// → 표기법만 다를 뿐 모두 10진수로 해석
// → 참조할 경우 모두 10진수로 해석 