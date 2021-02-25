console.log('스크립트 연결 완료!')
let final = [];
const input = document.getElementById('fileUpload');
input.addEventListener('change', function () {
  readXlsxFile(input.files[0]).then(function (data) {
    for (let i = 1; i < data.length; i++) {

      if (data[0] !== null) {
        final.push({ 'group': data[0], 'team': [] });
      } else {

        console.log(data[i][5]);
      }
      console.log(data[i][0]);
      console.log('index', i, data[i][5]);
    }
  });
});

console.log(final);

const view = document.getElementById('jsonData');
view.innerHTML = final;


// console.log('스크립트 연결 완료!')
// let final= [];
// const input = document.getElementById('fileUpload');
// input.addEventListener('change', function () {
//   readXlsxFile(input.files[0]).then(function (data) {
//     // console.log(data);
//     let i = 0;
//     final = data.map((data) => {
//       if (i > 0) {
//         if (data[0] !== null) {
//           final.push({'group': data[0], 'team':[]});
//         }
//         console.log(data[5]);
//       }
//       i++;
//     });
//   });
// });
// console.log(final);

// const view = document.getElementById('jsonData');
// view.innerHTML = final;