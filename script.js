let xp = 0;
let level = 1;

const xpDisplay = document.getElementById("xp");
const levelDisplay = document.getElementById("level");
const questButtons = document.querySelectorAll(".quest");

questButtons.forEach(button => {
    button.addEventListener("click", function () {
        const reward = parseInt(button.getAttribute("data-xp"));

        xp += reward;

        if (xp >= level * 100) {
            level++;
        }

        xpDisplay.textContent = xp;
        levelDisplay.textContent = level;

        button.disabled = true;

    });
});