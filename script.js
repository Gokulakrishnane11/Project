window.onload = () => {
  //  ^selected the timer

  let hr = document.getElementById("hour");
  let min = document.getElementById("minutes");
  let sec = document.getElementById("seconds");
  let ms = document.getElementById("milliseconds");

  // ^selected the buttons

  let startBtn = document.getElementById("startBtn");
  let pauseBtn = document.getElementById("pauseBtn");
  let resetBtn = document.getElementById("resetBtn");

  // ^ initialization the number
  let interval;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let milliseconds = 0;

  // ^ display the number

  ms.innerHTML = "00";
  sec.innerHTML = ":00";
  min.innerHTML = ":00";
  hr.innerHTML = "00";

  //^  start function

  startBtn.onclick = function () {
    clearInterval(interval);
    interval = setInterval(start, 10);
  };

  //^ pause function

  pauseBtn.onclick = function () {
    clearInterval(interval);
  };
  //^ reset function

  resetBtn.onclick = function () {
    clearInterval(interval);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    ms.innerHTML = milliseconds + "0";
    sec.innerHTML = ":" + seconds + "0";
    min.innerHTML = ":" + minutes + "0";
    hr.innerHTML = hours + "0";
  };

  //^ start the timer

  const start = () => {
    milliseconds++; //milliseconds add the 1+1

    if (milliseconds < 9) {
      // if milliseconds is less than 9. ms innerHTML 0 + milliseconds
      ms.innerHTML = "0" + milliseconds;
    }
    if (milliseconds > 9) {
      // if milliseconds is greater than 9 ms innerHTML= milliseconds
      ms.innerHTML = milliseconds;
    }

    if (milliseconds > 99) {
      // if milliseconds is greater than 99 ms, innerHTML=0 and seconds add +1 and sec innerHTML 0 + seconds, milliseconds = 0 , milliseconds = 0 + milliseconds.
      seconds++;
      sec.innerHTML = ":0" + seconds;
      milliseconds = 0;
      ms.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      sec.innerHTML = ":" + seconds; // same as above but + [:]
    }

    if (seconds > 59) {
      minutes++;
      min.innerHTML = ":0" + minutes; // same as above
      seconds = 0;
      sec.innerHTML = ":0" + seconds;
    }

    if (minutes > 9) {
      min.innerHTML = ":" + minutes; // same as above
    }
    if (minutes > 59) {
      hours++;
      hr.innerHTML = "0" + hours;
      minutes = 0;
      min.innerHTML = ":0" + minutes; // same as above
    }
    if (hours > 9) {
      hr.innerHTML = hours; // same as above
    }
    if (hours > 23) {
      clearInterval(interval); // reset interval
    }
  };
};
