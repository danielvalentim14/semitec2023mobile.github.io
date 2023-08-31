const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const semiTec = "26 september 2023";

function countdown(){
  const semiTecDate = new Date(semiTec)
  const currentDate = new Date();
  
  const totalSeconds = (semiTecDate - currentDate)/1000;
  
  
  const days = Math.floor(totalSeconds/3600/24);
  const hours = Math.floor(totalSeconds/3600)%24;
  const mins = Math.floor(totalSeconds/60)%60;
  const seconds = Math.floor(totalSeconds)%60;
  
  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
  return time == 10 ? '10': time;

  
}

countdown();

setInterval(countdown,1000);

//menu

function clickMenu() {
      if (Menuiten.style.display == 'block') {
      Menuiten.style.display = 'none'
      } else {
        Menuiten.style.display = 'block'
      }
    }