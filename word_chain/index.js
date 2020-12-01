

let first_word = "";
let next_word = "";
let wordChninGo = true;
const textInput = document.getElementById("next_word");

textInput.addEventListener('keyup', (e) => {
  e.preventDefault();
  if (e.key === 13 || e.keyCode === 13) {
    console.log('첫글자', first_word);
    console.log('두번째', next_word);
    if (first_word === '') {
      first_word = textInput.value;
      let li = document.createElement('li');
      li.append(first_word);
      document.querySelector('.word_list').append(li);
    } else {
      next_word = textInput.value
      onWordChain(first_word, next_word);
    }
  }
})

function onWordChain(first, next_word) {
  console.log(first, next_word);
    if (first[first.length - 1] == next_word[0]){
      console.log('correct');
      let li = document.createElement('li');
      li.append(next_word);
      document.querySelector('.word_list').append(li);
      
      textInput.value = null;
      first_word = next_word;
    } else {
      textInput.value = null;
      console.log('wrong');
    }
};

function createElement () {
  
}