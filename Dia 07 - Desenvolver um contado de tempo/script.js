var seconds = 0;
var minutes = 0;
var hours = 0;
var pauseTime;

function start() {
  pauseTime = setInterval(watchCounter, 1000);
}
function pause() {
  clearInterval(pauseTime);
}

function stop() {
  clearInterval(pauseTime);
  seconds = 0;
  minutes = 0;
  document.getElementById("watchDisplay").innerText = "00:00:00";
}

function watchMask(digits) {
  if (digits < 10) {
    return "0" + digits;
  } else {
    return (digits);
  }
}

function addSeconds() {}

function removeSeconds() {}

function watchCounter() {
  seconds++;
  if (seconds == 60) {
    minutes++;
    seconds = 0;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  document.getElementById("watchDisplay").innerText =
    watchMask(hours) + ":" + watchMask(minutes) + ":" + watchMask(seconds);
}
