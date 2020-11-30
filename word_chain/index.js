

let first = "";
let next_word = "";
let wordChninGo = true;
const textInput = document.getElementById("next_word");

textInput.addEventListener('keyup', (e) => {
  e.preventDefault();
  if (e.key === 13 || e.keyCode === 13) {
    console.log('첫글자', first);
    console.log('두번째', next_word);
    if (first === '') {
      first = textInput.value;
    } else {
      next_word = textInput.value
      onWordChain(first, next_word);
    }
  }
})

function onWordChain(first, next_word) {
  console.log(first, next_word);
    if (first[first.length - 1] == next_word[0]){
      console.log('correct');
    } else {
      console.log('wrong');
    }
};
