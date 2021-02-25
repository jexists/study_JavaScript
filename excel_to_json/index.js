console.log('스크립트 연결 완료!')

const input = document.getElementById('fileUpload');
input.addEventListener('change', function () {
  readXlsxFile(input.files[0]).then(function (data) {
    // console.log(data);
    let i = 0;
    data.map((data, index) => {
      if (i == 0) {
        let view = document.getElementById('jsonData');
        generateArray(view, data);
      }
      if (i > 0) {
        let view = document.getElementById('jsonData');
        generateObject(view, data)
      }
      i++;
    })
  });
});

function generateArray(view, data) {
  // console.log(view);
  console.log('property', data);
}
const teams = []
function generateObject(view, data) {
  // console.log(jsonData);
  teams.push(data[5]);
  // console.log('team: [' + data[5] +']');
  console.log(teams);
}
