console.log('스크립트 연결 완료!')

document.getElementById('fileUpload').addEventListener('change',  function(e) {
  selectedFile = e.target.files[0];
});

document.getElementById('uploadExcel').addEventListener('click', function() {
  var fileRender = new fileRender();
  if (selectedFile) { 
    fileRender.onload = function(e) {
      var data = e.target.result;

      var workbook = XLSX.read(data, {
        type: 'binary'
      });

      workbook.SheetNames.forEach(sheet => {
        let rowObject = XLSX.utils.sheet_to_row_object_array(
          workbook.Sheets[sheet]
        );

        let jsonObject = JSON.stringify(rowObject);
        document.getElementById('jsonData').innerHTML = jsonObject;
      });
    };
    fileRender.readAsBinaryString(selectedFile);
  }
})