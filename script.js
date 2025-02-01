let interval;
let isActive = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

const displayTime = document.getElementById('timeDisplay');
const startStopBtn = document.getElementById('startStopButton');
const resetBtn = document.getElementById('resetButton');

startStopBtn.addEventListener('click', toggleTimer);
resetBtn.addEventListener('click', resetTimer);

function toggleTimer() {
    if (isActive) {
        clearInterval(interval);
        startStopBtn.textContent = 'Start';
    } else {
        interval = setInterval(updateTime, 1000);
        startStopBtn.textContent = 'Stop';
    }
    isActive = !isActive;
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    displayTime.textContent = formatTime(hours, minutes, seconds);
}

function formatTime(hours, minutes, seconds) {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function resetTimer() {
    clearInterval(interval);
    isActive = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTime.textContent = '00:00:00';
    startStopBtn.textContent = 'Start';
}
