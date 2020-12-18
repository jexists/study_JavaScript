console.log('스크립트 연결 완료!')

// 변수선언 
let elemCanvas,
  elemVideo,
  elemPhone,
  elemBody,
  context,

  windowWidth = 0,  //브라우저 넓이
  windowHeight = 0, //브라우저 높이
  canvasWidth = 0,  //캔버스 넓이 (브라우저 폭에 맞춤)
  canvasHeight = 0, //캔버스 높이 (브라우저 높이에 맞춤)
  scrollY = 0, //현재 스크롤 위치
  relativeScrollY = 0,  //각 키프레임에서 사용하는 상대적인 스크롤 위치
  prevDurations = 0,  //이전 키프레임까지의 duration
  totalScrollHeight = 0,
  currentKeyframe = 0,  //현재 키프레임(0,1)
  phoneWidth = 1380,  //아이폰 이미지 기본 넓이
  phoneHeight = 3000, //아이폰 이미지 기본 높이

  // 함수 변수선언 
  resizeHandler,
  scrollHandler,
  render,
  drawCanvas,
  calcAnimationValue,
  calcFinalValue,
  init,

  pixelDuration = 0, //키프레임 당 차지하는 스크롤 높이
  keyframes = [{
    animationValues: {
      videoScale: [1, 2], //원래 크기엿다가 2배되는 것
      triangleMove: [0, 200],
      rectangleMove: [0, 500]
    }
  }, {
    animationValues: {
      videoScale: [2, 0.5], //커졋다가 작아지는 것
      triangleMove: [200, 1000],
      rectangleMove: [500, 500]
    }
  }];

  // element 선언
  elemBody = document.body
  elemVideo = document.getElementById('video');
  elemCanvas = document.getElementById('cover-canvas'),

  // 캔버스 그리기 시작
  context = elemCanvas.getContext('2d');

// 시작/초기화 함수
init = (() => {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;

  resizeHandler();
  render();

  window.addEventListener('resize', () => {
    requestAnimationFrame(resizeHandler);
    //브라우저 애니메이션 최적화 (부드럽게 이용)
  });

  window.addEventListener('scroll', () => {
    requestAnimationFrame(scrollHandler);
  });

  elemPhone = document.createElement('img');
  elemPhone.src = 'iphone.png';
  elemPhone.addEventListener('load', () => {
    drawCanvas();
  });
});

//윈도우 사이즈 변경 시 실행하는 함수
resizeHandler = () => {
  let i;
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;

  totalScrollHeight = 0; //초기화
  //타임라인 = 스크롤 영역
  //스크롤을 할 수 있는 범위/전체 높이 (body의 높이)
  //스크롤 높이를 작게 하면 애니메이션을 빠르게 재생
  //스크롤 높이를 높게 하면 애니메이션을 느리게 재생
  pixelDuration = 0.5 * windowHeight;
  //애니메이션 지속되는 시간 / 키프레임(변화) 두개라서 절반으로

  for (i = 0; i < keyframes.length; i++) {
    totalScrollHeight += pixelDuration;
  }
  totalScrollHeight += windowHeight;
  // console.log(pixelDuration); //x keyframes.length
  // console.log(windowHeight); //x 2
  // console.log(totalScrollHeight);

  elemBody.style.height = totalScrollHeight + 'px';
  elemCanvas.width = canvasWidth = windowWidth * 2;
  elemCanvas.height = canvasHeight = windowHeight * 2;
  // * 2 => 캔버스를 고해상도로 만들고 싶어서
  elemCanvas.style.width = windowWidth + 'px';
  elemCanvas.style.height = windowHeight + 'px';

  render();
};

scrollHandler = () => {
  scrollY = window.pageYOffset;
  //현재 스크롤된 위치

  //0보다 작거나 전체스크롤 이상이면 함수 종료
  if (scrollY < 0 || scrollY > (totalScrollHeight - windowHeight)) {
    return;
  }

  //pixelDuration = 스크롤범위
  //prevDurations = 이전에 프레임
  if (scrollY > pixelDuration + prevDurations) {
    prevDurations += pixelDuration;
    currentKeyframe++;
  } else if (scrollY < prevDurations) {
    prevDurations -= pixelDuration;
    currentKeyframe--;
  }

  relativeScrollY = scrollY - prevDurations;
  // console.log(currentKeyframe);

  render();
};

render = () => {
  // 그림 그리는 세팅 함수
  let videoScale, triangleMove, rectangleMove;
  //그라데이션, 삼각형 상하좌우, 사각형

  if (keyframes[currentKeyframe]) {
    videoScale = calcAnimationValue(keyframes[currentKeyframe].animationValues.videoScale);
    triangleMove = calcAnimationValue(keyframes[currentKeyframe].animationValues.triangleMove);
    rectangleMove = calcAnimationValue(keyframes[currentKeyframe].animationValues.rectangleMove);
  } else {
    return;
  }
  
  
  // console.log(keyframes[currentKeyframe].animationValues.videoScale);
  elemVideo.style.transform = `scale(${videoScale})`;

  context.clearRect(0, 0, canvasWidth, canvasHeight);
  //캔버스 그린거 지워주는것

  //이미지가 있을경우만 캔버스 그림 함수 실행
  if (elemPhone) {
    drawCanvas(videoScale, triangleMove, rectangleMove);
  };

};

//키프레임마다 얼마나 움직여야하는지 
calcAnimationValue = (values) => {
  return (relativeScrollY / pixelDuration) * (values[1] - values[0]) + values[0];
  // return (현재스크롤양 / 총스크롤) * (끝value - 시작value) + 시작[0];
  //relativeScrollY = keyframe스크롤에서 얼마나 되었나.. (상대적)
  //pixelDuration = 총 스크롤할수있는 양
  //relativeScrollY / pixelDuration => 현재스크롤/총스크롤 = 비율 (절반 = 0.5)
  //values[1] - values[0] => 끝 - 시작 = 총 움직이는 구간
  //+values[0] 시작 위치가 다를수 있어서... 시작위치를 더해야함
};

drawCanvas = (videoScale, triangleMove, rectangleMove) => {
  // 캔버스 도형 그리는 세팅 함수
  videoScale = videoScale || 1,
  triangleMove = triangleMove || 0,
  rectangleMove = rectangleMove || 0;

  context.save();
  context.translate((canvasWidth - phoneWidth * videoScale) * 0.5, (canvasHeight - phoneHeight * videoScale) * 0.5);
  //이동좌표
  context.drawImage(elemPhone, 0, 0, phoneWidth * videoScale, phoneHeight * videoScale);
  //elemPhone(폰이미지) 그려주기 (그리는 이미지, x, y, 넓이, 높이)
  context.restore();
  //이전 설정 / elem지워줘야함 아니면 계속 나옴
  context.fillStyle = '#2b2b2b';

  
  //moveTo(x,y) 그릴점을 이동
  //lineTo(x,y) 선을 그리는 것
  //canvasWidth * 0.5 = 중앙위치 (중앙을 기준으로 작업)
  //-/+triangleMove 상하/좌우로 이동해야하기 때문에 -/+

  //  위 삼각형
  // context.fillStyle = 'red';
  context.beginPath();
  context.moveTo(canvasWidth * 0.5 - 1500, -triangleMove - 1700);
  context.lineTo(canvasWidth * 0.5, canvasHeight * 0.5 - 150 - triangleMove);
  context.lineTo(canvasWidth * 0.5 + 1500, -triangleMove - 1700);
  context.lineTo(canvasWidth * 0.5 - 1500, -triangleMove - 1700);
  context.fill();
  context.closePath();

  
  //  아래 삼각형
  // context.fillStyle = 'blue';
  context.beginPath();
  context.moveTo(canvasWidth * 0.5 - 1500, canvasHeight + triangleMove + 1700);
  context.lineTo(canvasWidth * 0.5, canvasHeight * 0.5 + 150 + triangleMove);
  context.lineTo(canvasWidth * 0.5 + 1500, canvasHeight + triangleMove + 1700);
  context.lineTo(canvasWidth * 0.5 - 1500, canvasHeight + triangleMove + 1700);
  context.fill();
  context.closePath();

  
  //  왼쪽 삼각형
  // context.fillStyle = 'yellow';
  context.beginPath();
  context.moveTo(canvasWidth * 0.5 - 1700 - triangleMove, - 1700);
  context.lineTo(canvasWidth * 0.5 - 130 - triangleMove, canvasHeight * 0.5);
  context.lineTo(canvasWidth * 0.5 - 1700 - triangleMove, canvasHeight + 1700);
  context.lineTo(canvasWidth * 0.5 - 1700 - triangleMove, -1700);
  context.fill();
  context.closePath();

  
  //  오른쪽 삼각형
  // context.fillStyle = 'green';
  context.beginPath();
  context.moveTo(canvasWidth * 0.5 + 1700 + triangleMove, - 1700);
  context.lineTo(canvasWidth * 0.5 + 130 + triangleMove, canvasHeight * 0.5);
  context.lineTo(canvasWidth * 0.5 + 1700 + triangleMove, canvasHeight + 1700);
  context.lineTo(canvasWidth * 0.5 + 1700 + triangleMove, -1700);
  context.fill();
  context.closePath();

  // box 상하
  // context.fillStyle = 'white';
  context.fillRect(0, canvasHeight * 0.5 - 2600 - rectangleMove, canvasWidth, 2000);
  context.fillRect(0, canvasHeight * 0.5 + 600 + rectangleMove, canvasWidth, 2000);
};

init();
