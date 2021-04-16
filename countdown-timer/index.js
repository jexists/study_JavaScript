console.log('스크립트 연결 완료!')
let countdown;

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
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
  }, 1000);
}

timer(3);

// function 