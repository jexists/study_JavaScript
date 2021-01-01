console.log('스크립트 연결 완료!')


window.addEventListener('keydown', (e) => {
  // console.log(e.keyCode);

  // const audio = document.querySelector(`audio[data-key=${e.keyCode}]`); //ERROR

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // console.log(audio);
  // console.log(key);

  if(!audio) {
    return; // 다른곳 클릭했을 경우 함수 실행 종료
  }

  // audio.currentTime = 0; // 노래 처음부터 시작
  // audio.play();
  
  key.classList.add('playing');

});

/*
removeTransition = ((e) => {
  // console.log(e);
  // console.log(e.propertyName);

  if(e.propertyName !== 'transform') {
    return;
  }

  console.log(this);
  this.classList.remove('playing');
});
*/

function removeTransition(e) {
  if(e.propertyName !== 'transform') {
    return;
  }

  console.log(this);
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition)
});