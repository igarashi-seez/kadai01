const writeKeyInput = document.getElementById('input01');
const writeValueInput = document.getElementById('input02');
const readKeyInput = document.getElementById('input03');
const valueArea = document.getElementById('valueArea');
const sendButton = document.getElementById('button01')
const displayValueButton = document.getElementById('button02');
const downloadButton = document.getElementById('button03');
const message = document.getElementById('message')


//jsonに書き込み
sendButton.addEventListener('click', function () {
  sendData(writeKeyInput.value, writeValueInput.value)
});
//input.phpにkeyとvalueを送信する関数
function sendData(key, value) {
  const encodedKey = encodeURIComponent(key);
  const encodedValue = encodeURIComponent(value)
  const data = `key=${encodedKey}&value=${encodedValue}`;
  const ajax = new XMLHttpRequest();
  ajax.open('POST','index.php',true);
  ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
  ajax.send(data);
  ajax.onreadystatechange = function() {
		if( ajax.readyState === 4 && ajax.status === 200) {
			message.innerHTML = `{${key}:${value}}を追加しました`;
      writeKeyInput.value = '';
      writeValueInput.value = '';
		}
	};
}


//jsonを読み込むためのイベントリスナー
displayValueButton.addEventListener('click', function () {
  displayValue(readKeyInput.value);
})
//jsonを読み込み、該当するvalueを表示する関数
function displayValue (key) {
  fetch("./hiroshi.json")
  .then( response => response.json())
  .then( data => {
    value = data[key];
    valueArea.innerHTML = value;
  });
}


//ファイルをダウンロード
downloadButton.addEventListener('click', function () {
  let element = document.createElement('a');
  element.href = './hiroshi.json';
  element.download = 'hiroshi.json';
  element.click();
})