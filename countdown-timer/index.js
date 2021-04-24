console.log('스크립트 연결 완료!')
let countdown;
const timerDisplay = document.querySelector('.display__time-left');

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;

  displayTimeLeft(seconds);
  // console.log({now, then});

  countdown = setInterval(() => {
    // const secondsLeft = (then - Date.now()) / 1000; //소수점
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    // check stop

    if (secondsLeft <= 0) {
      clearInterval(countdown);
      return;
    }
    console.log(secondsLeft);
    displayTimeLeft(secondsLeft);
  }, 1000);
}

timer(124);

function displayTimeLeft(seconds) {
  // console.log(seconds);
  // const minutes = seconds / 60;
  // console.log({minutes});
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0':''}${remainderSeconds}`
  timerDisplay.textContent = display;
}
// function 