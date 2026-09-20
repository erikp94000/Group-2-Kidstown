(function () {
    "use strict";

    // Original data: data/museum/ss1.dat (Basic Tour) and ss2.dat (Advanced Tour)
    // Each question has 4 picture options; exactly one is correct.
    const TOURS = {
        basic: {
            label: "Basic Tour",
            questions:
    [
        {
            question: "Which picture shows the only star in our Solar System?",
            options: [
                { image: "c_ear1.gif", feedback: "Earth is one of the nine planets that orbit the Sun.", correct: false },
                { image: "c_ven1.gif", feedback: "Venus is the second planet from the Sun.", correct: false },
                { image: "c_sun1.gif", feedback: "The Sun is the only star in our Solar System.", correct: true },
                { image: "c_sat3.gif", feedback: "Saturn is a planet that orbits the only star in our Solar System.", correct: false },
            ]
        },
        {
            question: "Which planet is the smallest and is furthest from the Sun?",
            options: [
                { image: "c_jup1.gif", feedback: "Jupiter is the largest planet in our Solar System.", correct: false },
                { image: "c_ven1.gif", feedback: "Venus is larger than the smallest planet.", correct: false },
                { image: "c_plu1.gif", feedback: "Pluto is the smallest planet and is furthest from the Sun.", correct: true },
                { image: "c_sat3.gif", feedback: "Saturn is second largest planet.", correct: false },
            ]
        },
        {
            question: "Which picture shows the planet that is closest to the Sun?",
            options: [
                { image: "c_ear1.gif", feedback: "Earth is the third planet from the Sun.", correct: false },
                { image: "c_ura1.gif", feedback: "Uranus is the seventh planet from the Sun.", correct: false },
                { image: "c_sun1.gif", feedback: "You chose the Sun itself.", correct: false },
                { image: "c_mer1.gif", feedback: "Mercury is the closest planet to the Sun.", correct: true },
            ]
        },
        {
            question: "Which planet is known for its \"red spot\"?",
            options: [
                { image: "c_jup2.gif", feedback: "Jupiter is known for its red spot.", correct: true },
                { image: "c_mar1.gif", feedback: "Mars is known as the \"red planet\", but not for having a \"red spot\".", correct: false },
                { image: "c_hai1.gif", feedback: "A comet may travel through our solar system but a planet is what you're looking for.", correct: false },
                { image: "c_sat3.gif", feedback: "Saturn is known for its rings.", correct: false },
            ]
        },
        {
            question: "Which planet is the largest in the Solar System?",
            options: [
                { image: "c_mil1.gif", feedback: "The Milky Way Galaxy is larger than any planet.", correct: false },
                { image: "c_jup3.gif", feedback: "Jupiter is the largest planet in the Solar System.", correct: true },
                { image: "c_sun1.gif", feedback: "The Sun is larger than Jupiter but it is not considered a planet.", correct: false },
                { image: "c_sat3.gif", feedback: "Saturn is not the largest planet.", correct: false },
            ]
        },
        {
            question: "Which planet is the seventh planet from the Sun?",
            options: [
                { image: "c_ear1.gif", feedback: "You chose Earth, which is the third planet from the Sun.", correct: false },
                { image: "c_nep2.gif", feedback: "Close but not quite.  Neptune is the eighth planet from the Sun.", correct: false },
                { image: "c_ura1.gif", feedback: "Uranus is the seventh planet from the Sun.", correct: true },
                { image: "c_mar1.gif", feedback: "You chose Mars, which is the fourth planet from the Sun.", correct: false },
            ]
        },
        {
            question: "Which planet do you live on?",
            options: [
                { image: "c_ear2.gif", feedback: "Earth is the only planet that has life, as far as we know.", correct: true },
                { image: "c_hai2.gif", feedback: "Halley's Comet does not have life upon it.", correct: false },
                { image: "c_jup1.gif", feedback: "Jupiter is a gaseous planet, unable to sustain life.", correct: false },
                { image: "c_nep2.gif", feedback: "Neptune is a gaseous planet, unable to sustain life.", correct: false },
            ]
        },
        {
            question: "Which picture shows the largest object in our Solar System?",
            options: [
                { image: "c_ear1.gif", feedback: "Earth is not the largest object.", correct: false },
                { image: "c_ven1.gif", feedback: "Venus is not the largest object.", correct: false },
                { image: "c_sun1.gif", feedback: "The Sun is the largest object in our Solar System.", correct: true },
                { image: "c_sat3.gif", feedback: "Saturn is large but not as large as _____", correct: false },
            ]
        },
        {
            question: "Which planet is the ninth planet from the Sun?",
            options: [
                { image: "c_jup1.gif", feedback: "Jupiter is the fifth planet from the Sun.", correct: false },
                { image: "c_ven1.gif", feedback: "Venus is the third planet.", correct: false },
                { image: "c_plu1.gif", feedback: "Pluto is the ninth planet from the Sun.  It is also the furthest away.", correct: true },
                { image: "c_sat3.gif", feedback: "Saturn is the sixth planet.", correct: false },
            ]
        },
        {
            question: "Pluto is the smallest planet. What is the next smallest planet?",
            options: [
                { image: "c_ear1.gif", feedback: "Earth is not quite the second smallest.", correct: false },
                { image: "c_ura1.gif", feedback: "Uranus is quite large compared to the smaller planets.", correct: false },
                { image: "c_sun1.gif", feedback: "The Sun is larger than all of the planets.", correct: false },
                { image: "c_mer1.gif", feedback: "Except for Pluto, Mercury is the smallest planet.", correct: true },
            ]
        },
        {
            question: "Which planet is known for its \"rings\"?",
            options: [
                { image: "c_sat3.gif", feedback: "Saturn is known for its rings.  Saturn's rings are mostly ice particles.", correct: true },
                { image: "c_ven1.gif", feedback: "Venus does not have any \"rings\".", correct: false },
                { image: "c_hai1.gif", feedback: "A comet may travel through our solar system but a planet is what you're looking for.", correct: false },
                { image: "c_jup2.gif", feedback: "Jupiter is known for its red spot, not its rings.", correct: false },
            ]
        },
        {
            question: "Which planet is the fourth from the Sun?",
            options: [
                { image: "c_mil1.gif", feedback: "The Milky Way Galaxy is not a planet in our Solar System.", correct: false },
                { image: "c_mar1.gif", feedback: "Mars is the fourth planet from the Sun.", correct: true },
                { image: "c_ura1.gif", feedback: "Uranus is the seventh planet from the Sun.", correct: false },
                { image: "c_ear1.gif", feedback: "Earth is the third planet from the Sun.", correct: false },
            ]
        },
        {
            question: "Which planet is the eighth planet from the Sun?",
            options: [
                { image: "c_ear1.gif", feedback: "You chose Earth, which is the third planet from the Sun.", correct: false },
                { image: "c_jup2.gif", feedback: "Close but not quite.  Jupiter is the is the fifth planet from the Sun.", correct: false },
                { image: "c_nep2.gif", feedback: "Neptune is the eighth planet from the Sun.", correct: true },
                { image: "c_mar1.gif", feedback: "You chose Mars, which is the fourth planet from the Sun.", correct: false },
            ]
        },
        {
            question: "Which planet is between Mercury and Earth?",
            options: [
                { image: "c_ven1.gif", feedback: "Venus is the planet that resides between Mercury and Earth.", correct: true },
                { image: "c_hai2.gif", feedback: "Halley's Comet is not a planet.", correct: false },
                { image: "c_jup1.gif", feedback: "Jupiter is between Mars and Saturn.", correct: false },
                { image: "c_sat3.gif", feedback: "Saturn is between Jupiter and Uranus.", correct: false },
            ]
        },
        {
            question: "Which planet is between Jupiter and Uranus?",
            options: [
                { image: "c_nep1.gif", feedback: "Neptune resides between Uranus and Pluto.", correct: false },
                { image: "c_hai2.gif", feedback: "Halley's Comet is not a planet.", correct: false },
                { image: "c_jup1.gif", feedback: "Jupiter is between Mars and Saturn.", correct: false },
                { image: "c_sat3.gif", feedback: "Saturn is between Jupiter and Uranus.", correct: true },
            ]
        },
    ]
        },
        advanced: {
            label: "Advanced Tour",
            questions:
    [
        {
            question: "Which of these contains 99.85% of all the matter in the Solar System?",
            options: [
                { image: "c_ear1.gif", feedback: "Earth accounts for a very small portion of total mass of the Solar System.", correct: false },
                { image: "c_ven1.gif", feedback: "Venus accounts for a tiny portion of the total mass of the Solar System.", correct: false },
                { image: "c_sun1.gif", feedback: "The Sun accounts for 99.85% of all the matter in the Solar System.  The planets only contain 0.135% of the total mass.", correct: true },
                { image: "c_sat3.gif", feedback: "Although a large planet, Saturn accounts for a very small portion of the total mass of the Solar System.", correct: false },
            ]
        },
        {
            question: "Our Solar System resides in a spiral galaxy consisting of 200 billion stars called:",
            options: [
                { image: "c_jup1.gif", feedback: "Jupiter is a planet in our Solar System.", correct: false },
                { image: "c_ven1.gif", feedback: "Venus is a planet in our Solar System.", correct: false },
                { image: "c_mil1.gif", feedback: "The Milky Way Galaxy is the home of our Solar System.", correct: true },
                { image: "c_sat3.gif", feedback: "Saturn is a planet in our Solar System.", correct: false },
            ]
        },
        {
            question: "Because of its highly elliptical orbit, this planet is actually closer to the Sun than is Neptune during portions of its orbit.",
            options: [
                { image: "c_ear1.gif", feedback: "You chose Earth.  Earth is the third planet from the Sun and always closer to the Sun than Neptune.", correct: false },
                { image: "c_ura1.gif", feedback: "Close, but Uranus is always closer than Neptune to the Sun.", correct: false },
                { image: "c_sun1.gif", feedback: "You chose the Sun itself.", correct: false },
                { image: "c_plu1.gif", feedback: "Because of its irregular orbit Pluto is actually closer, at times, to the Sun than is Neptune.", correct: true },
            ]
        },
        {
            question: "Terrestrial Planets are the four innermost planets in the Solar System.  Which planet is a Terrestrial Planet?",
            options: [
                { image: "c_mer1.gif", feedback: "Mercury is considered a Terrestrial Planet because it is one of the four innermost planets.  They are called Terrestrial because they are compact and rocky like the Earth's surface.", correct: true },
                { image: "c_jup1.gif", feedback: "Jupiter is a Jovian Planet because of its gaseous nature.", correct: false },
                { image: "c_hai1.gif", feedback: "A comet is not one of the four innermost planets.", correct: false },
                { image: "c_sat3.gif", feedback: "Saturn is a Jovian Planet because of its gaseous nature.", correct: false },
            ]
        },
        {
            question: "The Jovian Planets are the four gaseous planets and consist of the fifth through the eighth planets.  Which planet is a Jovian Planet?",
            options: [
                { image: "c_ven1.gif", feedback: "Venus is one of the Terrestrial Planets.", correct: false },
                { image: "c_jup3.gif", feedback: "Jupiter is one of the Jovian Planets.  Saturn, Uranus and Neptune are also Jovian Planets.", correct: true },
                { image: "c_plu1.gif", feedback: "Pluto is not one of the four Jovian Planets because it is not gaseous.", correct: false },
                { image: "c_ear1.gif", feedback: "Earth is one of the four Terrestrial Planets.", correct: false },
            ]
        },
        {
            question: "Which planet is one of the four Terrestrial Planets and also has an enormous circular basin on its surface called the Caloris Basin?",
            options: [
                { image: "c_ear1.gif", feedback: "Earth is one of the Terrestrial Planets but it does not have the Caloris Basin on its surface.", correct: false },
                { image: "c_nep2.gif", feedback: "Neptune is one of the Jovian Planets.", correct: false },
                { image: "c_mer1.gif", feedback: "Mercury has a large circular basin like those found on the moon called the Caloris Basin.", correct: true },
                { image: "c_mar1.gif", feedback: "Mars is one of the Terrestrial Planets but it is not the one with the Caloris Basin on its surface.", correct: false },
            ]
        },
        {
            question: "This planet has many volcanoes and a fractured surface.  Its atmosphere is 96% carbon dioxide and its surface temperature is more than twice as hot as the Earth's.",
            options: [
                { image: "c_ven1.gif", feedback: "Venus has an unstable surface and it is very hot.  It also has clouds made up of sulfuric acid.", correct: true },
                { image: "c_hai2.gif", feedback: "Halley's Comet is not a planet.", correct: false },
                { image: "c_jup1.gif", feedback: "Jupiter is a gaseous planet without volcanoes.", correct: false },
                { image: "c_nep2.gif", feedback: "Neptune is a gaseous planet without volcanoes.", correct: false },
            ]
        },
        {
            question: "This planet has a diameter of 12756 km and the highest point on its surface is the tip of Mount Everest.  Its atmosphere is made up of 21% oxygen.",
            options: [
                { image: "c_sat1.gif", feedback: "Saturn's atmosphere contains virtually no oxygen.  Saturn's atmosphere contains mostly hydrogen (97%).", correct: false },
                { image: "c_ura1.gif", feedback: "Uranus has a diameter of 51118 km.  Almost 4 times the size of the planet with Mount Everest.", correct: false },
                { image: "c_ear2.gif", feedback: "Earth's atmosphere has the oxygen that humans require to breathe.", correct: true },
                { image: "c_mar1.gif", feedback: "Mars is smaller and its atmosphere is 95% carbon dioxide.", correct: false },
            ]
        },
        {
            question: "Which planet is larger than Mars but smaller than Earth?",
            options: [
                { image: "c_jup1.gif", feedback: "Jupiter is many times larger than Earth.", correct: false },
                { image: "c_ven1.gif", feedback: "Venus is almost twice the size of Mars but it is just barely smaller than Earth.  Venus is 12104 km in diameter.", correct: true },
                { image: "c_nep1.gif", feedback: "Neptune is larger than Earth.", correct: false },
                { image: "c_sat3.gif", feedback: "Saturn is a planet that is larger than Earth.", correct: false },
            ]
        },
        {
            question: "Which planet has one natural satellite called the \"Moon\"?",
            options: [
                { image: "c_ear1.gif", feedback: "Earth is the third planet from the Sun and only has one natural orbiting body called the \"Moon\".", correct: true },
                { image: "c_ura1.gif", feedback: "The Moon does not orbit Uranus.", correct: false },
                { image: "c_sun1.gif", feedback: "Earth would be considered a natural satellite of the Sun.", correct: false },
                { image: "c_plu1.gif", feedback: "Pluto does have a natural satellite called Charon.  Although this is a moon, it is not the \"Moon\".", correct: false },
            ]
        },
        {
            question: "This planet ranks as the third smallest planet.  It is a little hotter than Earth but not because it is closer to the Sun.",
            options: [
                { image: "c_mar1.gif", feedback: "Mars is the third smallest planet and is hotter than Earth due to its lack of protective atmosphere.", correct: true },
                { image: "c_jup1.gif", feedback: "Jupiter is the largest planet.", correct: false },
                { image: "c_hai1.gif", feedback: "A comet is not one of the planets.", correct: false },
                { image: "c_sat1.gif", feedback: "Saturn is a Jovian Planet that ranks second to largest.", correct: false },
            ]
        },
        {
            question: "This gas giant is 11 times bigger than Earth and 20% larger than Saturn.  It has a diameter of 142800km.",
            options: [
                { image: "c_ven1.gif", feedback: "Venus is not one of the gas giants.", correct: false },
                { image: "c_jup1.gif", feedback: "Jupiter is a gas giant and the largest planet in the Solar System.  Two of Jupiter's moons, Io and Europa can be seen in the picture.", correct: true },
                { image: "c_plu1.gif", feedback: "Pluto is the smallest planet.", correct: false },
                { image: "c_ear1.gif", feedback: "The Earth is not a gas giant.", correct: false },
            ]
        },
        {
            question: "This planet is the fourth largest planet and has a larger mass than Uranus.  It is nicknamed \"The Mystic\".",
            options: [
                { image: "c_nep1.gif", feedback: "Neptune is smaller than Uranus but it is larger in mass.  It will actually be the furthest planet from the Sun until 1999 when Pluto again becomes furthest.", correct: true },
                { image: "c_hai2.gif", feedback: "Halley's Comet is not a planet.", correct: false },
                { image: "c_jup1.gif", feedback: "Jupiter is the largest planet.", correct: false },
                { image: "c_plu1.gif", feedback: "Pluto is the smallest planet.", correct: false },
            ]
        },
    ]
        }
    };

    const IMAGE_PATH = "graphics/museum/";

    const tourButtons = document.getElementById("planetarium-tour-buttons");
    const quizCard = document.getElementById("planetarium-quiz");
    const startButton = document.getElementById("basic-tour-button");
    const advancedButton = document.getElementById("advanced-tour-button");

    let currentTour = null;
    let remaining = [];
    let currentQuestion = null;
    let disabledImages = [];

    function shuffle(array) {
        const copy = array.slice();
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    function startTour(tourKey) {
        currentTour = tourKey;
        remaining = shuffle(TOURS[tourKey].questions.map(function (_, index) { return index; }));
        tourButtons.hidden = true;
        quizCard.hidden = false;
        nextQuestion();
    }

    function nextQuestion() {
        disabledImages = [];

        if (remaining.length === 0) {
            showCompletion();
            return;
        }

        const index = remaining.shift();
        currentQuestion = TOURS[currentTour].questions[index];
        renderQuestion();
    }

    function renderQuestion() {
        quizCard.innerHTML = "";

        const title = document.createElement("div");
        title.className = "museum-planetarium__question";
        title.textContent = currentQuestion.question;
        quizCard.appendChild(title);

        const optionGrid = document.createElement("div");
        optionGrid.className = "museum-planetarium__options";

        currentQuestion.options.forEach(function (option, i) {
            if (disabledImages.includes(i)) {
                const img = document.createElement("img");
                img.src = IMAGE_PATH + option.image;
                img.alt = "Already tried — incorrect";
                img.className = "museum-planetarium__option museum-planetarium__option--disabled";
                optionGrid.appendChild(img);
                return;
            }

            const button = document.createElement("button");
            button.type = "button";
            button.className = "museum-planetarium__option-button";

            const img = document.createElement("img");
            img.src = IMAGE_PATH + option.image;
            img.alt = "Answer option";
            img.className = "museum-planetarium__option";

            button.appendChild(img);
            button.addEventListener("click", function () {
                selectOption(i);
            });

            optionGrid.appendChild(button);
        });

        quizCard.appendChild(optionGrid);

        const skipButton = document.createElement("button");
        skipButton.type = "button";
        skipButton.className = "btn museum-planetarium__skip";
        skipButton.textContent = "Skip this question";
        skipButton.addEventListener("click", nextQuestion);
        quizCard.appendChild(skipButton);
    }

    function selectOption(i) {
        const option = currentQuestion.options[i];

        quizCard.innerHTML = "";

        const resultImg = document.createElement("img");
        resultImg.src = IMAGE_PATH + option.image;
        resultImg.alt = option.correct ? "Correct answer" : "Incorrect answer";
        resultImg.className = "museum-planetarium__result-image";
        quizCard.appendChild(resultImg);

        const feedback = document.createElement("div");
        feedback.className = option.correct
            ? "museum-planetarium__feedback museum-planetarium__feedback--correct"
            : "museum-planetarium__feedback museum-planetarium__feedback--incorrect";
        feedback.textContent = (option.correct ? "Correct! " : "Not quite. ") + option.feedback;
        quizCard.appendChild(feedback);

        const nextButton = document.createElement("button");
        nextButton.type = "button";
        nextButton.className = "btn";

        if (option.correct) {
            nextButton.textContent = "New Question";
            nextButton.addEventListener("click", nextQuestion);
        } else {
            disabledImages.push(i);
            nextButton.textContent = "Try Again";
            nextButton.addEventListener("click", renderQuestion);
        }

        quizCard.appendChild(nextButton);

        if (!option.correct) {
            const skipButton = document.createElement("button");
            skipButton.type = "button";
            skipButton.className = "btn museum-planetarium__skip";
            skipButton.textContent = "Skip this question";
            skipButton.addEventListener("click", nextQuestion);
            quizCard.appendChild(skipButton);
        }
    }

    function showCompletion() {
        quizCard.innerHTML = "";

        const message = document.createElement("div");
        message.className = "museum-planetarium__feedback museum-planetarium__feedback--correct";
        message.textContent =
            "You've answered all the questions in the " + TOURS[currentTour].label + "! Great job.";
        quizCard.appendChild(message);

        const again = document.createElement("button");
        again.type = "button";
        again.className = "btn";
        again.textContent = "Start Over";
        again.addEventListener("click", function () {
            startTour(currentTour);
        });
        quizCard.appendChild(again);

        const switchTour = document.createElement("button");
        switchTour.type = "button";
        switchTour.className = "btn museum-planetarium__skip";
        switchTour.textContent = "Choose a Different Tour";
        switchTour.addEventListener("click", function () {
            quizCard.hidden = true;
            tourButtons.hidden = false;
        });
        quizCard.appendChild(switchTour);
    }

    startButton.addEventListener("click", function () {
        startTour("basic");
    });

    advancedButton.addEventListener("click", function () {
        startTour("advanced");
    });

})();
