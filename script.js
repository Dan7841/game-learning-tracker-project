let xp = 0;
let level = 1;

const xpDisplay = document.getElementById("xp");
const levelDisplay = document.getElementById("level");
const button = document.getElementById("completeQuest");

button.addEventListener("click", function () {
    xp += 20;

    if (xp >= level * 100) {
        level++;
    }

    xpDisplay.textContent = xp;
    levelDisplay.textContent = level;
});