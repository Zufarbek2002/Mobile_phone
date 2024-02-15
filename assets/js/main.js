const alarmBtn = document.querySelector('.alarm_btn')
const timeBtn = document.querySelector('.time_btn')
const timerBtn = document.querySelector('.timer_btn')
const mainWin = document.querySelectorAll('.line_box')
const closeBtn = document.querySelectorAll('.close_btn')
const setTime = document.querySelector('.set_time')
const playAlarm = document.querySelector('.play_alarm')
const stopAlarm = document.querySelector('.stop_alarm')
const audio = document.querySelector('.audio')
const hours = document.querySelector('.hour_box')
const minutes = document.querySelector('.minut_box')
const seconds = document.querySelector('.second_box')
const batteryPercent = document.querySelector('.battery_percent')
const batteryLevel = document.querySelector('.battery_level')
const heroTime = document.querySelector('.hero_time')
const alarmBoxs = document.querySelector('.alarm_boxs')
const timeBox = document.querySelector('.time_box')
const timerBox = document.querySelector('.timer_boxes')

const timeValue = document.getElementById('time')


// ============
// Alarm

alarmBtn.addEventListener('click', ()=>{
    mainWin.forEach(e=>{
        e.classList.add('open')
    })

    alarmBoxs.style.display = "flex"
})
closeBtn.forEach((e)=>{
  e.addEventListener('click', ()=>{
    mainWin.forEach(e=>{
        e.classList.remove('open')
    })
    alarmBoxs.style.display = "none"
    timeBox.style.display = 'none'
    timerBox.style.display = 'none'
})
})
setTime.addEventListener('click', ()=>{
    setInterval(() => {
        let date = new Date();
        let time = date.toLocaleTimeString("it-IT");
        if (time === timeValue.value + ':00') {
          audio.play();
        }
      }, 1000);
})

playAlarm.addEventListener("click", () => {
  audio.play();
});

stopAlarm.addEventListener("click", () => {
  audio.pause();
});

// ====================
// Clock
timeBtn.addEventListener('click', ()=>{
  mainWin.forEach(e=>{
      e.classList.add('open')
  })
  timeBox.style.display = "flex"
})

setInterval(()=>{
  let date = new Date();
  hours.innerHTML = date.getHours()
  minutes.innerHTML = date.getMinutes()
  seconds.innerHTML = date.getSeconds()
  if (hours.textContent.length == 1) {
    hours.innerHTML = '0'+date.getHours()
  }
  if (minutes.textContent.length == 1) {
    minutes.innerHTML = '0'+date.getMinutes()
  }
  if (seconds.textContent.length == 1) {
    seconds.innerHTML = '0'+date.getSeconds()
  }
  let time = date.toLocaleTimeString('it-IT')
  heroTime.innerHTML = time
},1000)

//==============
// battery

let batteryPromise = navigator.getBattery();

batteryPromise.then((batteryObject) => {
  setInterval(()=>{
    batteryPercent.innerHTML = Math.floor(batteryObject.level*100) + '%'
    if (batteryObject.level > 0.5) {
      batteryLevel.classList.add('battery_fully')
    } else if(batteryObject.level > 0.1){
      batteryLevel.classList.add('battery_half')
    } else {
      batteryLevel.classList.add('battery_null')
    }
  },0)
});

// =============
// Timer

timerBtn.addEventListener('click', ()=>{
  mainWin.forEach(e=>{
      e.classList.add('open')
  })
  timerBox.style.display = "flex"
})
// const timer = document.querySelector('.timer_btn')
// const minutTime = document.getElementById('minut')
// timer.addEventListener('click', ()=>{
//   if (minutTime.value > 0) {
//     let a = 0

//       for (let i = 10; i > 0; i--) {
//         setInterval(()=>{
//        console.log(i);
//         },1000)
//       }
//   }
// })
