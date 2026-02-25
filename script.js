let xp = 0;
let level = 1;

const xpDisplay = document.getElementById("xp");
const levelDisplay = document.getElementById("level");
const questButtons = document.querySelectorAll(".quest");
const progressBar = document.getElementById("progress-bar");

questButtons.forEach(button => {
    button.addEventListener("click", function () {
        const reward = parseInt(button.getAttribute("data-xp"));

        xp += reward;

        let requiredXP = level * 100;

        if (xp >= requiredXP) {
            xp -= requiredXP;
            level++;
            requiredXP = level * 100;
        }

        xpDisplay.textContent = xp;
        levelDisplay.textContent = level;

        button.disabled = true;

        let progressPercent = (xp / requiredXP) * 100;
        progressBar.style.width = progressPercent + "%";

    });
});