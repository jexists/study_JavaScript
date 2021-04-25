console.log('스크립트 연결 완료!')
let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;

  displayTimeLeft(seconds);
  // console.log({now, then});
  displayEndTime(then);
  
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
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp)
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back at ${adjustedHour}:${minutes < 10 ? '0':''}${minutes}`;
}