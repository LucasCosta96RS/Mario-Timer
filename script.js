const startButton = document.getElementsByClassName("start-button")[0];
const stopButton = document.getElementsByClassName("stop-button")[0];
const zeroButton = document.getElementsByClassName("zero-button")[0];
const h1 = document.getElementById("main-number");

let number = 0;
let timer;

function start() {
  timer = setInterval(() => {
    number++;
    h1.innerHTML = (number / 100).toFixed(2);
  }, 10);
}

function stop() {
  clearInterval(timer);
}

function zero() {
  number = 0;
  h1.innerHTML = 0;
}

startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
zeroButton.addEventListener("click", zero);
