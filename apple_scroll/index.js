console.log('스크립트 연결 완료!')

let elemCanvas,
    elemVideo,
    elemPhone,
    context,
    windowWidth = 0,  //브라우저 넓이
    windowHeight = 0, //브라우저 높이
    canvasWidth = 0,  //캔버스 넓이 (브라우저 폭에 맞춤)
    canvasHeight = 0, //캔버스 높이 (브라우저 높이에 맞춤)
    scrollY = 0, //현재 스크롤 위치
    relativeScrollY = 0,  //각 키프레임에서 사용하는 상대적인 스크롤 위치
    prevDurations = 0,  //이전 키프레임까지의 duration
    totalScrollHeight = 0,  
    //스크롤을 할 수 있는 범위/전체 높이 (body의 높이)
    //스크롤 높이를 작게 하면 애니메이션을 빠르게 재생
    //스크롤 높이를 높게 하면 애니메이션을 느리게 재생
    currentKeyframe = 0,  //현재 키프레임(0,1)
    phoneWidth = 1380,  //아이폰 이미지 기본 넓이
    phoneHeight = 3000, //아이폰 이미지 기본 높이

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
        trianleMove: [0, 200],
        rectangleMove: [0, 500]
      }
    }, {
      animationValues: {
        videoScale: [2, 0.5], //커졋다가 작아지는 것
        trianleMove: [200, 1000],
        rectangleMove: [500, 500]
      }
    }],

    elemBody = document.body,
    elemCanvas = document.getElementById('cover-canvas'),
    context = elemCanvas.getContext('2d');
    elemVideo = document.getElementById('video');

init(() => {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;

  resizeHandler();
  render();

  window.addEventListener('resize', () => {
    requestAnimationFrame(resizeHandler);
  });
  window.addEventListener('scroll', () => {
    requestAnimationFrame(scrollHandler);
  });

  elemPhone = document.createElement('img');
  elemPhone.src = 'phone.png';
  elemPhone.addEventListener('load', () => {
    drawCanvas();
  });
});

//윈도우 사이즈 변경 시 실행하는 함수
resizeHandler(() => {
  let i;
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  totalScrollHeight = 0; //초기화
  pixelDuration = 0.5 * windowHeight;
  //애니메이션 지속되는 시간 / 키프레임 두개라서 절반으로

  for (i = 0; i < keyframes.length; i++) {
    totalScrollHeight += pixelDuration;
  }
  totalScrollHeight += windowHeight;

  elemBody.style.height = totalScrollHeight + 'px';
  elemCanvas.window = canvasWidth = windowWidth * 2;
  elemCanvas.height = canvasHeight = windowHeight * 2;
  // * 2 => 캔버스를 고해상도로 만들고 싶어서
  elemCanvas.style.window = windowWidth + 'px';
  elemCanvas.style.height = windowHeight + 'px';
});

render(() => {
  let videoScale, triangleMove, rectangleMove;
  
  if (keyframes[currentKeyframe]) {
    
  }
});

init();