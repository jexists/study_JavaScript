console.log('스크립트 연결 완료!')

function test() {
  let btnB= document.querySelector('.btnB');
  let stempObj = document.querySelectorAll('.stempObj')
  btnB.addEventListener('click', function() {
    console.log("???")
    for (let i = 0; i < stempObj.length; i++) {
      let img = document.createElement('img');
      img.src = "https://cdn.rebbit.net/talk/image/jexists_cd037be6-0c51-49a7-b01d-68eadec00720_900x1025.png"
      stempObj[i].appendChild(img)
    }
  })
}
test()