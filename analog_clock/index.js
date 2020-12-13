console.log('스크립트 연결 완료!')

const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
console.log(hr);
setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;

  // console.log(`${hh+(mm/12)}시 ${mm}분 ${ss}초`);
},1000)