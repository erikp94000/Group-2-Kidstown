(function () {
    "use strict";

    const townshipDisplay =
        document.getElementById("township-display");

    const countryGameView =
        document.getElementById("country-game-view");

    const countryGameButton =
        document.getElementById("country-game-button");

    const countryGamePanel =
        document.getElementById("country-game-panel");

    const countryResultPanel =
        document.getElementById("country-result-panel");

    const countryShapeImage =
        document.getElementById("country-shape-image");

    const countryClues =
        document.getElementById("country-clues");

    const countryAnswers =
        document.getElementById("country-answers");

    const countryResultTitle =
        document.getElementById("country-result-title");

    const countryResultImage =
        document.getElementById("country-result-image");

    const countryResultText =
        document.getElementById("country-result-text");

    const countrySkipButton =
        document.getElementById("country-skip-button");

    const countryBackSetButton =
        document.getElementById("country-back-set-button");

    const countryNextButton =
        document.getElementById("country-next-button");

    const countryBackButton =
        document.getElementById("country-back-button");


    const countrySets = [
        {
            shape: "graphics/township/match_co.gif",

            clues: [
                'This country is also known as "The Land Down Under."',
                "Koalas and tasmanian devils live here.",
                "This country takes up an entire continent."
            ],

            answers: [
                {
                    name: "France",
                    correct: false,
                    image: "graphics/township/francmap.gif",
                    info:
                        "France is part of Europe. The capital of France is Paris."
                },
                {
                    name: "Australia",
                    correct: true,
                    image: "graphics/township/Austcntx.gif",
                    info:
                        "Australia is about the same size as the United States, but much of its interior is desert."
                },
                {
                    name: "Japan",
                    correct: false,
                    image: "graphics/township/japanmap.gif",
                    info:
                        "Japan is an island country off the coast of mainland Asia."
                }
            ]
        },


        {
            shape: "graphics/township/match2.gif",

            clues: [
                "This country is in Europe.",
                "Part of this country is in the Arctic Circle.",
                "This country was invaded by the USSR in 1939."
            ],

            answers: [
                {
                    name: "Finland",
                    correct: true,
                    image: "graphics/township/Fincontx.gif",
                    info:
                        "The capital of Finland is Helsinki. Finland contains thousands of lakes."
                },
                {
                    name: "Egypt",
                    correct: false,
                    image: "graphics/township/Egypt.gif",
                    info:
                        "Egypt is in North Africa. The capital of Egypt is Cairo."
                },
                {
                    name: "Jamaica",
                    correct: false,
                    image: "graphics/township/Jamaica.gif",
                    info:
                        "Jamaica is an island in the Caribbean Sea. Its capital is Kingston."
                }
            ]
        },


        {
            shape: "graphics/township/match3.gif",

            clues: [
                "This country is part of the Middle East.",
                "Most of the people in this country are Islamic.",
                "About 25% of the world's oil reserves are in this country."
            ],

            answers: [
                {
                    name: "Gabon",
                    correct: false,
                    image: "graphics/township/Gabon.gif",
                    info:
                        "Gabon is in Africa. Its capital is Libreville."
                },
                {
                    name: "Ukraine",
                    correct: false,
                    image: "graphics/township/Ukraine.gif",
                    info:
                        "Ukraine is in Eastern Europe."
                },
                {
                    name: "Saudi Arabia",
                    correct: true,
                    image: "graphics/township/Saudicon.gif",
                    info:
                        "The capital of Saudi Arabia is Riyadh. Mecca and Medina are located there."
                }
            ]
        },


        {
            shape: "graphics/township/Match4.gif",

            clues: [
                "This is a South American country.",
                "The world's highest waterfalls, Angel Falls, are in this country.",
                "The official language is Spanish."
            ],

            answers: [
                {
                    name: "Thailand",
                    correct: false,
                    image: "graphics/township/thailand.gif",
                    info:
                        "Thailand is in Asia. Its capital is Bangkok."
                },
                {
                    name: "Spain",
                    correct: false,
                    image: "graphics/township/Spain.gif",
                    info:
                        "Spain is in Europe. Its capital is Madrid."
                },
                {
                    name: "Venezuela",
                    correct: true,
                    image: "graphics/township/Venezcon.gif",
                    info:
                        "The capital of Venezuela is Caracas. Angel Falls is located in Venezuela."
                }
            ]
        },


        {
            shape: "graphics/township/match5.gif",

            clues: [
                "This country is in Asia.",
                "More than 1 billion people live here.",
                "One of the oldest civilizations in the world exists here."
            ],

            answers: [
                {
                    name: "Antarctica",
                    correct: false,
                    image: "graphics/township/Antarc.gif",
                    info:
                        "Antarctica is not a country. It is a continent covered mostly by ice."
                },
                {
                    name: "Madagascar",
                    correct: false,
                    image: "graphics/township/Madagas.gif",
                    info:
                        "Madagascar is a large island off the coast of Africa."
                },
                {
                    name: "China",
                    correct: true,
                    image: "graphics/township/Chinacon.gif",
                    info:
                        "The capital of China is Beijing. Many historic inventions originated in China."
                }
            ]
        },


        {
            shape: "graphics/township/match6.gif",

            clues: [
                "This country is part of North America.",
                "This is the world's largest Spanish-speaking country.",
                "Mayans, Aztecs, Toltecs, and Olmecs used to live here."
            ],

            answers: [
                {
                    name: "Mexico",
                    correct: true,
                    image: "graphics/township/Mexicont.gif",
                    info:
                        "The capital of Mexico is Mexico City. Mexico was home to several major ancient civilizations."
                },
                {
                    name: "Laos",
                    correct: false,
                    image: "graphics/township/Laos.gif",
                    info:
                        "Laos is in Asia. Its capital is Vientiane."
                },
                {
                    name: "Turkey",
                    correct: false,
                    image: "graphics/township/turkey.gif",
                    info:
                        "Turkey is located in both Europe and Asia. Its capital is Ankara."
                }
            ]
        }
    ];


    let currentSet = 0;


    function showCountryGame() {
        townshipDisplay.hidden = true;
        countryGameView.hidden = false;

        currentSet = 0;

        renderCountrySet();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    function renderCountrySet() {
        const set = countrySets[currentSet];

        countryGamePanel.hidden = false;
        countryResultPanel.hidden = true;

        countryShapeImage.src = set.shape;

        countryShapeImage.alt =
            `Country outline for set ${currentSet + 1}`;


        countryClues.innerHTML = "";
        countryAnswers.innerHTML = "";


        for (let i = 0; i < set.clues.length; i++) {
            const clueButton =
                document.createElement("button");

            clueButton.className = "btn";
            clueButton.textContent =
                `Clue ${i + 1}`;

            clueButton.addEventListener(
                "click",
                function () {
                    clueButton.textContent =
                        set.clues[i];

                    clueButton.disabled = true;
                }
            );

            countryClues.appendChild(clueButton);
        }


        for (let i = 0; i < set.answers.length; i++) {
            const answer = set.answers[i];

            const answerButton =
                document.createElement("button");

            answerButton.className = "btn";

            answerButton.textContent =
                `${String.fromCharCode(65 + i)}. ${answer.name}`;

            answerButton.addEventListener(
                "click",
                function () {
                    showCountryResult(answer);
                }
            );

            countryAnswers.appendChild(answerButton);
        }


        if (currentSet === countrySets.length - 1) {
            countrySkipButton.hidden = true;
        }
        else {
            countrySkipButton.hidden = false;
        }
    }


    function showCountryResult(answer) {
        countryGamePanel.hidden = true;
        countryResultPanel.hidden = false;

        countryResultImage.src = answer.image;
        countryResultImage.alt = answer.name;

        countryResultText.textContent =
            answer.info;


        if (answer.correct) {

            countryResultTitle.textContent =
                `Correct! The country is ${answer.name}!`;

            countryBackSetButton.hidden = true;
            countryNextButton.hidden = false;


            if (currentSet === countrySets.length - 1) {

                countryResultTitle.textContent =
                    `Correct! The country is ${answer.name}!`;

                countryResultText.textContent =
                    answer.info +
                    " That's all for now! Thanks for playing!";

                countryNextButton.textContent =
                    "Back to Township";
            }
            else {
                countryNextButton.textContent =
                    "Go to the Next Matching Game";
            }
        }

        else {

            countryResultTitle.textContent =
                `That country is ${answer.name}.`;

            countryBackSetButton.hidden = false;
            countryNextButton.hidden = true;
        }


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    function returnToCurrentSet() {
        renderCountrySet();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    function nextCountrySet() {

        if (currentSet === countrySets.length - 1) {
            showTownshipHome();
            return;
        }

        currentSet++;

        renderCountrySet();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    function skipCountrySet() {

        if (currentSet < countrySets.length - 1) {
            currentSet++;
            renderCountrySet();
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    function showTownshipHome() {
        countryGameView.hidden = true;
        townshipDisplay.hidden = false;

        currentSet = 0;

        countryResultPanel.hidden = true;
        countryGamePanel.hidden = false;

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    countryGameButton.addEventListener(
        "click",
        showCountryGame
    );

    countryBackButton.addEventListener(
        "click",
        showTownshipHome
    );

    countryBackSetButton.addEventListener(
        "click",
        returnToCurrentSet
    );

    countryNextButton.addEventListener(
        "click",
        nextCountrySet
    );

    countrySkipButton.addEventListener(
        "click",
        skipCountrySet
    );

})();