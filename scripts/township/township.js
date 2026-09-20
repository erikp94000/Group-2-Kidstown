(function () {
    "use strict";

const townshipDisplay = document.getElementById("township-display");
const zeusView = document.getElementById("zeus-view");

const zeusButton = document.getElementById("zeus-button");
const zeusBackButton = document.getElementById("zeus-back-button");

const zeusSubmitButton = document.getElementById("zeus-submit-button");
const zeusResult = document.getElementById("zeus-result");

const zeusTryAgainButton = document.getElementById("zeus-try-again-button");

const pyramidsButton = document.getElementById("pyramids-button");
const pyramidsView = document.getElementById("pyramids-view");
const pyramidsBackButton = document.getElementById("pyramids-back-button");

const pyramidsSubmitButton = document.getElementById("pyramids-submit-button");

const pyramidsResult = document.getElementById("pyramids-result");

const pyramidsTryAgainButton = document.getElementById("pyramids-try-again-button");

function showZeus() {
    townshipDisplay.hidden = true;
    pyramidsView.hidden = true;
    zeusView.hidden = false;

    zeusResult.hidden = true;
    zeusResult.textContent = "";
}

function showPyramids() {
    townshipDisplay.hidden = true;
    zeusView.hidden = true;
    pyramidsView.hidden = false;
}

function showTownshipHome() {
    zeusView.hidden = true;
    pyramidsView.hidden = true;
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

    zeusResult.hidden = false;

    if (missed === 0) {
        zeusResult.textContent = "You got all of the questions correct!";
        zeusTryAgainButton.hidden = true;
    } else if (missed === 1) {
        zeusResult.textContent = "You missed 1 question.";
        zeusTryAgainButton.hidden = false;
    } else {
        zeusResult.textContent = `You missed ${missed} questions.`;
        zeusTryAgainButton.hidden = false;
    }

}

function resetZeusQuiz() {
    document.getElementById("zeus-year").value = "";

    const existenceAnswers =
        document.querySelectorAll('input[name="zeus-exists"]');

    existenceAnswers.forEach(function (answer) {
        answer.checked = false;
    });

    for (let i = 1; i <= 7; i++) {
        document.getElementById(`zeus-letter-${i}`).value = "";
    }

    zeusResult.textContent = "";
    zeusResult.hidden = true;
    zeusTryAgainButton.hidden = true;
}

function checkPyramidsAnswers() {
    let missed = 0;

    const year =
        document.getElementById("pyramids-year").value;

    const corridorsAnswer =
        document.querySelector('input[name="pyramids-corridors"]:checked');

    const letters = [
        document.getElementById("pyramids-letter-1").value,
        document.getElementById("pyramids-letter-2").value,
        document.getElementById("pyramids-letter-3").value,
        document.getElementById("pyramids-letter-4").value,
        document.getElementById("pyramids-letter-5").value,
        document.getElementById("pyramids-letter-6").value,
        document.getElementById("pyramids-letter-7").value
    ].join("");

    if (year !== "2560 BCE") {
        missed++;
    }

    if (!corridorsAnswer || corridorsAnswer.value !== "yes") {
        missed++;
    }

    if (letters !== "PYRAMID") {
        missed++;
    }

    pyramidsResult.hidden = false;

    if (missed === 0) {
        pyramidsResult.textContent =
            "You got all of the questions correct!";

        pyramidsTryAgainButton.hidden = true;
    } else if (missed === 1) {
        pyramidsResult.textContent =
            "You missed 1 question.";

        pyramidsTryAgainButton.hidden = false;
    } else {
        pyramidsResult.textContent =
            `You missed ${missed} questions.`;

        pyramidsTryAgainButton.hidden = false;
    }
}

function resetPyramidsQuiz() {
    document.getElementById("pyramids-year").value = "";

    const corridorAnswers =
        document.querySelectorAll('input[name="pyramids-corridors"]');

    corridorAnswers.forEach(function (answer) {
        answer.checked = false;
    });

    for (let i = 1; i <= 7; i++) {
        document.getElementById(`pyramids-letter-${i}`).value = "";
    }

    pyramidsResult.textContent = "";
    pyramidsResult.hidden = true;
    pyramidsTryAgainButton.hidden = true;
}

zeusButton.addEventListener("click", showZeus);
zeusBackButton.addEventListener("click", showTownshipHome);
zeusSubmitButton.addEventListener("click", checkZeusAnswers);
zeusTryAgainButton.addEventListener("click", resetZeusQuiz);
pyramidsButton.addEventListener("click", showPyramids);
pyramidsBackButton.addEventListener("click", showTownshipHome);
pyramidsSubmitButton.addEventListener("click", checkPyramidsAnswers);
pyramidsTryAgainButton.addEventListener("click", resetPyramidsQuiz);

})();