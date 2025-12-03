let timer;
let seconds = 0;
let isRunning = false;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

document.getElementById("start").addEventListener("click", () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTime, 1000);
    }
});

document.getElementById("pause").addEventListener("click", () => {
    isRunning = false;
    clearInterval(timer);
});

document.getElementById("reset").addEventListener("click", () => {
    isRunning = false;
    clearInterval(timer);
    seconds = 0;
    display.innerHTML = "00:00:00";
    laps.innerHTML = "";
});

document.getElementById("lap").addEventListener("click", () => {
    if (isRunning) {
        const li = document.createElement("li");
        li.textContent = display.innerHTML;
        laps.appendChild(li);
    }
});

function updateTime() {
    seconds++;
    let hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    let mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    let secs = String(seconds % 60).padStart(2, "0");

    display.innerHTML = `${hrs}:${mins}:${secs}`;
}
