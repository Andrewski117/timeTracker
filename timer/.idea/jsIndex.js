let totalSeconds = 0;
let timer = 0;
let counting = false;

let start = document.querySelector('.start');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let domSeconds = document.querySelector('.seconds');
let isCounting = document.querySelector('.isCounting');
let countingBackground = document.querySelector('h3').style;


if(localStorage.getItem('savedTime')){
    totalSeconds = localStorage.getItem('savedTime');
    totalSeconds = +totalSeconds;
    totalSeconds.toFixed(1);
}

convertTime(+totalSeconds);

start.addEventListener('click',startStop);


function startStop(){
    if(!counting){
        isCounting.innerHTML = "Yes";
        countingBackground.backgroundColor = 'green';
        timer = Date.now();
        counting = true;
    }
    else{
        isCounting.innerHTML = "No";
        countingBackground.backgroundColor = 'red';
        counting = false;
        let currentSeconds = ((Date.now() - timer)/1000);
        totalSeconds += currentSeconds;
        
        domSeconds.innerText = 0;
        totalSeconds = Math.round(+totalSeconds);
        domSeconds.innerText = +totalSeconds;
        convertTime(totalSeconds);
        
        localStorage.setItem('savedTime',+totalSeconds);
    }
}

function convertTime(seconds){
    let hourVar = 0;
    let minVar = 0;
    let secVar = 0;
    if(seconds > 3600){
        hourVar = Math.floor(seconds / 3600);
        let tempMin = (seconds % 3600) / 60;
        minVar = Math.floor(tempMin);
        let tempSec = (seconds / 60) % 1;
        secVar = Math.round(60 * tempSec);
    }
    else if(seconds > 60){
        minVar = Math.floor(seconds/60);
        let tempSec = (seconds / 60) % 1;
        secVar = Math.round(60*tempSec);
    }
    else{
        secVar = Math.round(seconds);
    }
    hours.innerText = hourVar;
    minutes.innerText = minVar;
    domSeconds.innerText = secVar;
}