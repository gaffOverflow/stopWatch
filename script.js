const timeDisplay = document.querySelector('#timeDisplay')
const pauseBtn = document.querySelector('#pauseBtn')
const startBtn = document.querySelector('#startBtn')
const resetBtn = document.querySelector('#resetBtn')

let startTime = 0
let elapsedTime = 0
let currentTime = 0
let pause = true
let intervalId
let hours = 0
let min = 0
let sec = 0

startBtn.addEventListener("click", () => {
if(pause){
  pause = false
  startBtn = Date.now() - elapsedTime
  intervalId = setInterval(updateTime, 30)
}
})
pauseBtn.addEventListener("click", () => {

});
resetBtn.addEventListener("click", () => {

});

function updateTime(){
elapsedTime = Date.now() - startTime;
}