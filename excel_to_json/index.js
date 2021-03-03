console.log('스크립트 연결 완료!')
let final = [];
const input = document.getElementById('fileUpload');
input.addEventListener('change', function () {
  readXlsxFile(input.files[0]).then(function (data) {
    let j = 0;
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] !== null) {
        console.log(data[i]);
        final.push({ 'group': "'" + data[i][0] + "'", 'team': [data[i][7]] });
        if(i !== 1) {
          j++;
        }
      } else {
        final[j].team.push(data[i][7]);
      }
      // console.log(data[i][0]);
      // console.log('index', i, data[i][5]);
    }
    console.log(final);

    const JSONfinal = JSON.stringify(final).split('"').join('');
    // console.log(JSONfinal.replace('"', ''));
    console.log(JSONfinal);
    const view = document.getElementById('jsonData');
    view.innerHTML = JSONfinal;
  });
});
final = final;



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