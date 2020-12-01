

let first_word = "";
let next_word = "";
let wordChninGo = true;
const textInput = document.getElementById("next_word");

textInput.addEventListener('keypress', (e) => {
  e.preventDefault();
  e.stopPropagation();

  if (e.key === 13 || e.keyCode === 13) {
    console.log('첫글자', !first_word);
    if (!first_word) {
      first_word = textInput.value;
      createElement(first_word);
    } else {
      next_word = textInput.value
      onWordChain(first_word, next_word);
    }
  }
})

function onWordChain(first, next_word) {
  console.log('첫', first, '다음', next_word);
    if (first[first.length - 1] == next_word[0]){
      createElement(next_word);
      first_word = next_word;
    } else {
      textInput.value = null;
      console.log('wrong');
    }
};

function createElement(data) {
  let li = document.createElement('li');
  li.append(data);
  document.querySelector('.word_list').append(li);
  textInput.value = null;
}