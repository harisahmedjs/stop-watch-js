const start = document.querySelector('#btn')
const div = document.querySelector('.repo')
const minute = document.querySelector('.minu')
const h = document.querySelector('.hou')
const stoppped = document.querySelector('#btn1')
const reset = document.querySelector('#btn2')


let second = 0
let min =0
let time;
let hours= 0
start.addEventListener('click',()=>{
    time = setInterval(() => {
      second +=1
      div.innerHTML =second
      if ( second === 60) {
        min +=1
        minute.innerHTML = min
        second = 0
      } 
      if (min === 60) {
        hours += 1
        h.innerHTML = hours
        min = 0
      }
    },1000);
start.disabled=true
})
stoppped.addEventListener('click',()=>{
 clearInterval(time)
 start.disabled=false
})
reset.addEventListener('click',()=>{
  clearInterval(time)
second =0
div.innerHTML ="00"

min = 0
minute.innerHTML="00"

hours=0
h.innerHTML="00"
start.disabled=false
})

