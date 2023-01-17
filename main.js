const writeKeyInput = document.getElementById('input01');
const writeValueInput = document.getElementById('input02');
const readKeyInput = document.getElementById('input03');
const valueArea = document.getElementById('valueArea');
const sendButton = document.getElementById('button01')
const displayValueButton = document.getElementById('button02');
const downloadButton = document.getElementById('button03');

sendButton.addEventListener('click', function () {
  const key = writeKeyInput.value;
  const value = writeValueInput.value;
  const data = 'key='+encodeURIComponent(key)+'&value='+encodeURIComponent(value);
  const ajax = new XMLHttpRequest();
  ajax.open('POST','index.php',true);
  ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
  ajax.send(data);
});

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