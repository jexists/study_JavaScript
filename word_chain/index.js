

let first_word = "";
let next_word = "";
let wordChninGo = true;
const textInput = document.getElementById("word_type");

textInput.addEventListener('keypress', (e) => {
  // keypress: 영어로 쓸경우 안되고 한국어만 가능
  // keyup: 영어 끝말잇기 할경우 사용

  e.preventDefault();
  e.stopPropagation();

  if (e.key === 13 || e.keyCode === 13) {
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
  if (first[first.length - 1] == next_word[0]) {
    createElement(next_word);
    first_word = next_word;
  } else {
    textInput.value = null;
    if (wordChninGo) {
      let li = document.createElement('li');
      li.classList.add('red');
      li.append('실패');
      document.querySelector('.word_list').append(li);
    }
    wordChninGo = false;
  }
};

function createElement(data) {
  let li = document.createElement('li');
  li.append(data);
  document.querySelector('.word_list').append(li);
  textInput.value = null;
}