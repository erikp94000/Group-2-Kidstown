(function () {
    "use strict";

const townshipDisplay = document.getElementById("township-display");
const zeusView = document.getElementById("zeus-view");

const zeusButton = document.getElementById("zeus-button");
const zeusBackButton = document.getElementById("zeus-back-button");

const zeusSubmitButton = document.getElementById("zeus-submit-button");
const zeusResult = document.getElementById("zeus-result");

function showZeus() {
    townshipDisplay.hidden = true;
    zeusView.hidden = false;
}

function showTownshipHome() {
    zeusView.hidden = true;
    townshipDisplay.hidden = false;
}

function checkZeusAnswers() {
    let missed = 0;

    const year = document.getElementById("zeus-year").value;

    const existsAnswer =
        document.querySelector('input[name="zeus-exists"]:checked');

    const letters = [
        document.getElementById("zeus-letter-1").value,
        document.getElementById("zeus-letter-2").value,
        document.getElementById("zeus-letter-3").value,
        document.getElementById("zeus-letter-4").value,
        document.getElementById("zeus-letter-5").value,
        document.getElementById("zeus-letter-6").value,
        document.getElementById("zeus-letter-7").value
    ].join("");

    if (year !== "420 BCE") {
        missed++;
    }

    if (!existsAnswer || existsAnswer.value !== "no") {
        missed++;
    }

    if (letters !== "OLYMPIA") {
        missed++;
    }

    if (missed === 0) {
        zeusResult.textContent = "You got all of the questions correct!";
    } else if (missed === 1) {
        zeusResult.textContent = "You missed 1 question.";
    } else {
        zeusResult.textContent = `You missed ${missed} questions.`;
    }
}

zeusButton.addEventListener("click", showZeus);
zeusBackButton.addEventListener("click", showTownshipHome);
zeusSubmitButton.addEventListener("click", checkZeusAnswers);

})();