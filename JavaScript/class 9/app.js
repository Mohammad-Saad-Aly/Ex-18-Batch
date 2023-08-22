var minutes = 0
var seconds = 0
var miliseconds = 0
var min = document.getElementById('min')
var sec = document.getElementById('sec')
var msec = document.getElementById('msec')
var interval;



function start(){

    interval = setInterval(function(){
        miliseconds++
        msec.innerHTML = miliseconds
        if(miliseconds >= 100){
            seconds++
            sec.innerHTML = seconds
            miliseconds = 0
        }
        else if(seconds >=5){
            minutes++
            min.innerHTML = minutes
            seconds = 0
        }
    },10)

    document.getElementById('sss').disabled = true
    
}
function pause(){
    clearInterval(interval)
    document.getElementById('sss').disabled = false
}

function reset(){
    minutes = 0
    seconds = 0
    miliseconds = 0
    min.innerHTML = minutes
    sec.innerHTML = seconds
    msec.innerHTML = miliseconds
}



function start2(){
    start()
}








































