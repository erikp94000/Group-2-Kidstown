(function () {
    "use strict";

    const townshipDisplay =
        document.getElementById("township-display");

    const tajView =
        document.getElementById("taj-view");

    const tajButton =
        document.getElementById("taj-button");

    const tajBackButton =
        document.getElementById("taj-back-button");

    const tajSubmitButton =
        document.getElementById("taj-submit-button");

    const tajResult =
        document.getElementById("taj-result");

    const tajTryAgainButton =
        document.getElementById("taj-try-again-button");

    const tajResultImage =
        document.getElementById("taj-result-image");


    function showTaj() {
        townshipDisplay.hidden = true;
        tajView.hidden = false;

        resetTajQuiz();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    function showTownshipHome() {
        tajView.hidden = true;
        townshipDisplay.hidden = false;

        resetTajQuiz();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    function checkTajAnswers() {
        let missed = 0;

        const location =
            document.getElementById("taj-location").value;

        const craftsmenAnswer =
            document.querySelector(
                'input[name="taj-craftsmen"]:checked'
            );

        const letters = [
            document.getElementById("taj-letter-1").value,
            document.getElementById("taj-letter-2").value,
            document.getElementById("taj-letter-3").value,
            document.getElementById("taj-letter-4").value
        ].join("");


        if (location !== "India") {
            missed++;
        }


        if (
            !craftsmenAnswer ||
            craftsmenAnswer.value !== "true"
        ) {
            missed++;
        }


        if (letters !== "LOVE") {
            missed++;
        }


        tajResult.hidden = false;

        tajResultImage.hidden = false;

        if (missed === 3) {
            tajResultImage.src =
                "graphics/township/taj14.jpg";
        }
        else if (missed === 2) {
            tajResultImage.src =
                "graphics/township/taj12.jpg";
        }
        else if (missed === 1) {
            tajResultImage.src =
                "graphics/township/taj34.jpg";
        }
        else {
            tajResultImage.src =
                "graphics/township/taj1.jpg";
        }


        if (missed === 0) {
            tajResult.textContent =
                "You got all of the questions correct!";

            tajTryAgainButton.hidden = true;
        }
        else if (missed === 1) {
            tajResult.textContent =
                "You missed 1 question.";

            tajTryAgainButton.hidden = false;
        }
        else {
            tajResult.textContent =
                `You missed ${missed} questions.`;

            tajTryAgainButton.hidden = false;
        }
    }


    function resetTajQuiz() {
        document.getElementById("taj-location").value = "";

        const craftsmenAnswers =
            document.querySelectorAll(
                'input[name="taj-craftsmen"]'
            );

        craftsmenAnswers.forEach(function (answer) {
            answer.checked = false;
        });


        for (let i = 1; i <= 4; i++) {
            document.getElementById(
                `taj-letter-${i}`
            ).value = "";
        }


        tajResult.textContent = "";
        tajResult.hidden = true;

        tajResultImage.src = "";
        tajResultImage.hidden = true;

        tajTryAgainButton.hidden = true;
    }


    tajButton.addEventListener(
        "click",
        showTaj
    );

    tajBackButton.addEventListener(
        "click",
        showTownshipHome
    );

    tajSubmitButton.addEventListener(
        "click",
        checkTajAnswers
    );

    tajTryAgainButton.addEventListener(
        "click",
        resetTajQuiz
    );

})();