// const fs = require("fs");

const writeKeyInput = document.getElementById('input01');
const writeValueInput = document.getElementById('input02');
const readKeyInput = document.getElementById('input03');
const valueArea = document.getElementById('valueArea');
const displayValueButton = document.getElementById('button02');
const downloadButton = document.getElementById('button03');

displayValueButton.addEventListener('click', function () {
  displayValue(readKeyInput.value);
})

//読み込む
function displayValue (key) {
  fetch("./hiroshi.json")
  .then( response => response.json())
  .then( data => {
    value = data[key];
    valueArea.innerHTML = value;
  });
}
downloadButton.addEventListener('click', function () {
  let element = document.createElement('a');
  element.href = './hiroshi.json';
  element.download = 'hiroshi.json';
  element.click();
})

// 書き込むデータ準備
let jsonData;
let hiroshi;

// fs.readFile("hiroshif.json", "utf-8", (err, data) => {
//   if (err) throw err;
//   jsonData = JSON.perse(data)
// });

// // 書き込み
// fs.writeFile("file1.txt", data, (err) => {
//   if (err) throw err;
//   console.log('正常に書き込みが完了しました');
// });