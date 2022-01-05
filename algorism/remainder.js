
const remainder1 = (A, B, C) => {
  return (A + B) % C
}

const remainder2 = (A, B, C) => {
  return ((A % C) + (B % C)) % C
}

const remainder3 = (A, B, C) => {
  return (A * B) % C
}

const remainder4 = (A, B, C) => {
  return ((A % C) * (B % C)) % C
}

const remainder = (A, B, C) => {
  return `${(A + B) % C} 
${((A % C) + (B % C)) % C} 
${(A * B) % C} 
${((A % C) * (B % C)) % C}`
}

// console.log(remainder1(5, 8, 4));
// console.log(remainder2(5, 8, 4));
// console.log(remainder3(5, 8, 4));
// console.log(remainder4(5, 8, 4));
console.log(remainder(5, 8, 4));