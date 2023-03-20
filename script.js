const timeDisplay = document.querySelector("#timeDisplay");
const pauseBtn = document.querySelector("#pauseBtn");
let startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let pause = true;
let intervalId;
let hours = 0;
let min = 0;
let sec = 0;
let milsec = 0

startBtn.addEventListener("click", () => {
  if (pause) {
    pause = false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 75);
  }
});
pauseBtn.addEventListener("click", () => {
  if (!pause) {
    pause = true;
    // elapsedTime = Date.now() - startTime;
    clearInterval(intervalId);
  }
});
resetBtn.addEventListener("click", () => {
  pause = true;
  clearInterval(intervalId);
  elapsedTime = 0
  startTime = 0;
  milsec = 0
  sec = 0;
  min = 0;
  hours = 0;
  timeDisplay.textContent = "00:00:00:00";
});

function updateTime() {
  elapsedTime = Date.now() - startTime;

  milsec = Math.floor((elapsedTime / (1000/60)) % 60);
  sec = Math.floor((elapsedTime / 1000) % 60);
  min = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

  milsec = pad(milsec);
  sec = pad(sec);
  min = pad(min);
  hours = pad(hours);

  timeDisplay.textContent = `${hours}:${min}:${sec}:${milsec}`;

  // function pad(unit) {
  //   return ("0" + unit).length > 2 ? unit : "0" + unit;
  // }
  function pad(unit) {
    return unit >= 10 ? unit : "0" + unit;
  }
}
