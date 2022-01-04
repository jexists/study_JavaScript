
const gugudan = (num) => {
  let final = '';

  for (let i = 2; i < 10; i++) {
    final += num + ' * ' + i + ' = ' + num * i + '\n'
  }

  return final;
}

console.log(gugudan(8));
