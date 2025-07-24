let time = 60;
let hit = 0;
let score = 0;

function makeBubble() {
    let Tot_bub = "";
    for (let i = 1; i <= 171; i++) {
        let rn = Math.floor(Math.random() * 10); 
        Tot_bub += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#p-btm").innerHTML = Tot_bub;
}

function runTimer() {
    let timeint = setInterval(function () {
        if (time > 0) {
            time--;
            document.querySelector("#timer").textContent = time;
        } else {
            clearInterval(timeint);
            document.querySelector("#p-btm").innerHTML = `<h1>Game Over!</h1>`;
            
        }
    }, 1000);
}

function makeHit() {
    hit = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = hit;
}

function makeScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#p-btm").addEventListener("click", function (e) {
    let clickedNum = Number(e.target.textContent);
    if (clickedNum === hit) {
        makeScore();
        makeHit(); 
        makeBubble(); 
    }
});

makeBubble();
runTimer();
makeHit();
document.querySelector("#refresh-btn").addEventListener("click", function () {
    location.reload();
});