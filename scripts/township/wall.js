(function () {
    "use strict";

    const townshipDisplay = document.getElementById("township-display");

    const wallView = document.getElementById("wall-view");
    const wallButton = document.getElementById("wall-button");

    const wallSubmitButton =
        document.getElementById("wall-submit-button");

    const wallResult =
        document.getElementById("wall-result");

    const wallTryAgainButton =
        document.getElementById("wall-try-again-button");

    const wallBackButton =
        document.getElementById("wall-back-button");

    const wallResultImage =
        document.getElementById("wall-result-image");


    function hideOtherWonderViews() {
        const zeusView = document.getElementById("zeus-view");
        const pyramidsView = document.getElementById("pyramids-view");
        const tajView = document.getElementById("taj-view");

        if (zeusView) {
            zeusView.hidden = true;
        }

        if (pyramidsView) {
            pyramidsView.hidden = true;
        }

        if (tajView) {
            tajView.hidden = true;
        }
    }


    function showWall() {
        hideOtherWonderViews();

        if (townshipDisplay) {
            townshipDisplay.hidden = true;
        }

        wallView.hidden = false;

        resetWallQuiz();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    function showTownshipHomeFromWall() {
        wallView.hidden = true;

        if (townshipDisplay) {
            townshipDisplay.hidden = false;
        }

        resetWallQuiz();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    function checkWallAnswers() {
        let missed = 0;

        const dynasty =
            document.getElementById("wall-dynasty").value;

        const trueFalseAnswer =
            document.querySelector(
                'input[name="wall-true-false"]:checked'
            );

        const letters = [
            document.getElementById("wall-letter-1").value,
            document.getElementById("wall-letter-2").value,
            document.getElementById("wall-letter-3").value,
            document.getElementById("wall-letter-4").value,
            document.getElementById("wall-letter-5").value,
            document.getElementById("wall-letter-6").value
        ].join("");


        // Question 1
        if (dynasty !== "Ming") {
            missed++;
        }


        // Question 2
        if (
            !trueFalseAnswer ||
            trueFalseAnswer.value !== "true"
        ) {
            missed++;
        }


        // Question 3
        if (letters !== "BRICKS") {
            missed++;
        }


        wallResult.hidden = false;
        wallResultImage.hidden = false;

        if (missed === 0) {
            wallResult.textContent =
                "You got all of the questions correct!";

            wallResultImage.src =
                "graphics/township/answer3.jpg";

            wallTryAgainButton.hidden = true;
        }
        else if (missed === 1) {
            wallResult.textContent =
                "You missed 1 question.";

            wallResultImage.src =
                "graphics/township/answer2.jpg";

            wallTryAgainButton.hidden = false;
        }
        else if (missed === 2) {
            wallResult.textContent =
                "You missed 2 questions.";

            wallResultImage.src =
                "graphics/township/answer1.jpg";

            wallTryAgainButton.hidden = false;
        }
        else {
            wallResult.textContent =
                "You missed 3 questions.";

            wallResultImage.src =
                "graphics/township/answer0.jpg";

            wallTryAgainButton.hidden = false;
        }
    }


    function resetWallQuiz() {
        document.getElementById("wall-dynasty").value = "";

        const trueFalseAnswers =
            document.querySelectorAll(
                'input[name="wall-true-false"]'
            );

        trueFalseAnswers.forEach(function (answer) {
            answer.checked = false;
        });


        for (let i = 1; i <= 6; i++) {
            document.getElementById(
                `wall-letter-${i}`
            ).value = "";
        }


        wallResult.textContent = "";
        wallResult.hidden = true;
        wallResultImage.src = "";
        wallResultImage.hidden = true;

        wallTryAgainButton.hidden = true;
    }


    if (wallButton) {
        wallButton.addEventListener(
            "click",
            showWall
        );
    }


    if (wallSubmitButton) {
        wallSubmitButton.addEventListener(
            "click",
            checkWallAnswers
        );
    }


    if (wallTryAgainButton) {
        wallTryAgainButton.addEventListener(
            "click",
            resetWallQuiz
        );
    }


    if (wallBackButton) {
        wallBackButton.addEventListener(
            "click",
            showTownshipHomeFromWall
        );
    }

})();