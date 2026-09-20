(function () {
    "use strict";

    // =========================================================
    // TOY STORE DATA
    // =========================================================

    const riddles = [
        {
            question: `I wear a multicolored coat
of ribbons, green, yellow and blue
I shine after each rain
To bring good luck
To all of you.`,
            answer: "It is a rainbow.",
            image: "graphics/toystore/rain3.gif",
            alt: "Rainbow"
        },
        {
            question: `Blow it up
and watch the skin
grow bigger.
Twist a string to it.
Tie it.
See it floating there
way above you
in the air.`,
            answer: "It is a balloon.",
            image: "graphics/toystore/balloon.gif",
            alt: "Balloon"
        },
        {
            question: `Once these creatures roamed
the world alone
Now they are fossil.
Now they are bone.
You can see them
in the halls of
the natural history museum.`,
            answer: "They are dinosaurs.",
            image: "graphics/toystore/dino.gif",
            alt: "Dinosaurs"
        },
        {
            question: `Over six feet tall,
with black and white feathers,
and two long feet,
you will find me
at the zoo street.`,
            answer: "I am an ostrich.",
            image: "graphics/toystore/ostrich.gif",
            alt: "Ostrich"
        },
        {
            question: `I am the color of milky white
falling through the air
landing on things
to light there.`,
            answer: "I am a snow flake.",
            image: "graphics/toystore/snow.gif",
            alt: "Snow"
        },
        {
            question: `They grow by lakes
and streams
when workers see them
they scream
they are four feet tall
in the fall
blooming in white seeds
they are like weeds
hot dog at first
catlike at last.`,
            answer: "I am a cattail.",
            image: "graphics/toystore/cattail.gif",
            alt: "Cattail"
        },
        {
            question: `They are yellow at first
then fluffy white
hundreds grouped together
they will foat away
in autumn days
upon windy weather.`,
            answer: "I am a dandelion.",
            image: "graphics/toystore/dande.gif",
            alt: "Dandelion"
        }
    ];

    const shapePoems = [
        {
            image: "graphics/toystore/star.gif",
            alt: "Star shape",
            question: "What shape do you see?",
            answerTitle: "DID YOU SEE A STAR?",
            answerText: `Stars are so bright,
shining above us all.
Millions and billions
shining from dusk to dawn
with silver light, so pretty.`
        },
        {
            image: "graphics/toystore/leaf1.gif",
            alt: "Leaf shape",
            question: "What shape do you see?",
            answerTitle: "DID YOU SEE A LEAF?",
            answerText: `Leaves are so neat.
Green, gold, brown and last but not least red.
falling, dancing & playing,
they're neat.`
        },
        {
            image: "graphics/toystore/moon.gif",
            alt: "Crescent moon shape",
            question: "What shape do you see?",
            answerTitle: "DID YOU SEE A CRESCENTMOON?",
            answerText: `Have you ever thought about the moon?
Peaceful and sleepy
with all its craters and of course mountains.
It lets you go to sleep.`
        },
        {
            image: "graphics/toystore/tree.gif",
            alt: "Tree shape",
            question: "What shape do you see?",
            answerTitle: "DID YOU SEE A TREE?",
            answerText: `Trees are so majestic,
so tall and green,
standing above everyone.
It gives me cool shade in the summer
with all its leaves.
thank goodness for the trees!`
        },
        {
            image: "graphics/toystore/clover.gif",
            alt: "Four leaf clover shape",
            question: "What shape do you see?",
            answerTitle: "DID YOU SEE A FOUR LEAF CLOVER?",
            answerText: `I once found a four leaf clover.
"Oh wow,"
I thought, "It'll bring me good luck."
O.k. I wish I never found it.
Never found it!
That day I fell down the stairs
and I got kicked in the shins, O.K.
Pooh on that four leaf clover.`
        }
    ];

    // =========================================================
    // HTML ELEMENTS
    // =========================================================

    const riddleDisplay = document.getElementById("riddle-display");
    const answerDisplay = document.getElementById("answer-display");
    const toystoreImage = document.getElementById("toystore-image");

    const riddleStartButton =
        document.getElementById("riddle-start-button");

    const answerButton =
        document.getElementById("answer-button");

    const nextButton =
        document.getElementById("next-button");

    const shapeButton =
        document.getElementById("shape-button");

    const nextShapeButton =
        document.getElementById("next-shape-button");

    const problemButton =
        document.getElementById("problem-button");

    const toolsButton =
        document.getElementById("tools-button");

    const solutionButton =
        document.getElementById("solution-button");

    const riddleNumberNav =
        document.getElementById("riddle-number-nav");

    const shapeNumberNav =
        document.getElementById("shape-number-nav");


    // Safety check in case this script is ever loaded
    // without the Toy Store HTML.
    if (
        !riddleDisplay ||
        !answerDisplay ||
        !toystoreImage ||
        !riddleStartButton ||
        !answerButton ||
        !nextButton ||
        !shapeButton ||
        !nextShapeButton ||
        !problemButton ||
        !toolsButton ||
        !solutionButton
    ) {
        console.warn("Toy Store HTML elements were not found.");
        return;
    }


    // =========================================================
    // STATE
    // =========================================================

    let currentRiddle = 0;
    let currentShape = 0;
    let currentSection = null;


    // Preserve line breaks from the original poems/riddles.
    riddleDisplay.style.whiteSpace = "pre-line";
    answerDisplay.style.whiteSpace = "pre-line";

    


    // =========================================================
    // HELPER FUNCTIONS
    // =========================================================

    function hideActivityButtons() {
        answerButton.hidden = true;
        nextButton.hidden = true;
        nextShapeButton.hidden = true;
        toolsButton.hidden = true;
        solutionButton.hidden = true;
    }


    function showImage(src, alt) {
        if (src) {
            toystoreImage.src = src;
            toystoreImage.alt = alt;
            toystoreImage.hidden = false;
        } else {
            toystoreImage.removeAttribute("src");
            toystoreImage.alt = "";
            toystoreImage.hidden = true;
        }
    }


    function clearActivity() {
        riddleDisplay.textContent = "";
        answerDisplay.textContent = "";

        showImage("", "");
        hideActivityButtons();
    }

    function renderRiddleNavigation() {
        riddleNumberNav.innerHTML = "";

        for (let i = 0; i < riddles.length; i++) {
            const button = document.createElement("button");

            button.textContent = i + 1;
            button.className = "toystore__number-button";

            if (i === currentRiddle) {
                button.classList.add("active");
            }

            button.addEventListener("click", function () {
                showRiddle(i);
            });

            riddleNumberNav.appendChild(button);
        }
    }


    function renderShapeNavigation() {
        shapeNumberNav.innerHTML = "";

        for (let i = 0; i < shapePoems.length; i++) {
            const button = document.createElement("button");

            button.textContent = i + 1;
            button.className = "toystore__number-button";

            if (i === currentShape) {
                button.classList.add("active");
            }

            button.addEventListener("click", function () {
                showShape(i);
            });

            shapeNumberNav.appendChild(button);
        }
    }


    // =========================================================
    // RIDDLES
    // =========================================================

    function startRiddles() {
        currentSection = "riddles";
        showRiddle(0);
    }


    function showRiddle(index) {
        currentSection = "riddles";
        currentRiddle = index;

        clearActivity();

        riddleNumberNav.hidden = false;
        shapeNumberNav.hidden = true;

        renderRiddleNavigation();

        nextButton.textContent = "Next Riddle";

        riddleDisplay.innerHTML = `
            <div class="toystore__section-label">
                RIDDLE ${index + 1} OF ${riddles.length}
            </div>

            <div class="toystore__main-text">
                ${riddles[index].question.replace(/\n/g, "<br>")}
            </div>

            <div class="toystore__prompt">
                Can you guess it?
            </div>
        `;

        const image = document.getElementById("toystore-image");
        const answer = document.getElementById("answer-display");

answer.after(image);

        answerButton.hidden = false;
    }


    function showRiddleAnswer() {
        const riddle = riddles[currentRiddle];

        showImage(riddle.image, riddle.alt);

        answerDisplay.innerHTML =
            `<div class="toystore__answer">${riddle.answer}</div>`;

        answerButton.hidden = true;

        if (currentRiddle < riddles.length - 1) {
            nextButton.textContent = "Next Riddle";
        } else {
            nextButton.textContent = "Go to Shape Poems";
        }

        nextButton.hidden = false;
    }


    function nextRiddle() {
        if (currentRiddle < riddles.length - 1) {
            showRiddle(currentRiddle + 1);
        } else {
            startShapePoems();
        }
    }


    // =========================================================
    // SHAPE POEMS
    // =========================================================

    function startShapePoems() {
        currentSection = "shapes";
        showShape(0);
    }


    function showShape(index) {
        currentSection = "shapes";
        currentShape = index;

        riddleNumberNav.hidden = true;
        shapeNumberNav.hidden = false;

        renderShapeNavigation();

        nextShapeButton.textContent = "Next Shape Poem";

        clearActivity();

        const shape = shapePoems[index];
        const image = document.getElementById("toystore-image");
        const answer = document.getElementById("answer-display");

        answer.parentNode.insertBefore(image, answer);

        showImage(shape.image, shape.alt);

        riddleDisplay.innerHTML = `
            <div class="toystore__section-label">
                SHAPE POEM ${index + 1} OF ${shapePoems.length}
            </div>

            <div class="toystore__prompt">
                ${shape.question}
            </div>
        `;

        answerButton.hidden = false;
    }


    function showShapeAnswer() {
        const shape = shapePoems[currentShape];

        answerDisplay.innerHTML = `
            <div class="toystore__answer-title">
                ${shape.answerTitle}
            </div>

            <div class="toystore__main-text">
                ${shape.answerText.replace(/\n/g, "<br>")}
            </div>
        `;

        answerButton.hidden = true;

        if (currentShape < shapePoems.length - 1) {
            nextShapeButton.textContent = "Next Shape Poem";
        } else {
            nextShapeButton.textContent = "Go to Bonus Problem";
        }

        nextShapeButton.hidden = false;
    }


    function nextShape() {
        if (currentShape < shapePoems.length - 1) {
            showShape(currentShape + 1);
        } else {
            startBonusProblem();
        }
    }


    // =========================================================
    // BONUS PROBLEM
    // =========================================================

    function startBonusProblem() {
        currentSection = "problem";

        riddleNumberNav.hidden = true;
        shapeNumberNav.hidden = true;

        clearActivity();

        riddleNumberNav.hidden = true;
        shapeNumberNav.hidden = true;

        showImage(
            "graphics/toystore/pingpong.gif",
            "Ping pong ball stuck in a hole"
        );

        riddleDisplay.textContent =
            `BONUS PROBLEM:

Ping pong (table tennis) is a fun game to play,
but sometimes the ball gets away and rolls into a hole.
That is exactly what happened to this man.
The problem is, he can not reach the ball.

Can you help him retrieve the ball?`;

        toolsButton.hidden = false;
    }


    function showTools() {
        clearActivity();

        showImage(
            "graphics/toystore/tools.gif",
            "Available tools for retrieving the ping pong ball"
        );

        riddleDisplay.textContent =
            `HERE ARE THE AVAILABLE TOOLS:

There is a bucket of water, a broom, a shovel,
a roll of string, and a dust pan.

What tools would you use to get the ball out of the hole?`;

        solutionButton.hidden = false;
    }


    function showSolution() {
        clearActivity();

        showImage(
            "graphics/toystore/ansprob.gif",
            "Solution to the bonus problem"
        );

        riddleDisplay.textContent =
            "DID YOU THINK OF THE WATER?";

        answerDisplay.textContent =
            `There are multiple ways to retrieve the ping pong ball.

A simple way is to fill the hole with the water from the bucket,
and let the ball float to the top of the hole.

From there, you can reach and grab it.`;
    }


    // =========================================================
    // ANSWER BUTTON
    // =========================================================

    function showAnswer() {
        if (currentSection === "riddles") {
            showRiddleAnswer();
        } else if (currentSection === "shapes") {
            showShapeAnswer();
        }
    }


    // =========================================================
    // EVENT LISTENERS
    // =========================================================

    riddleStartButton.addEventListener("click", startRiddles);

    shapeButton.addEventListener("click", startShapePoems);

    problemButton.addEventListener("click", startBonusProblem);

    answerButton.addEventListener("click", showAnswer);

    nextButton.addEventListener("click", nextRiddle);

    nextShapeButton.addEventListener("click", nextShape);

    toolsButton.addEventListener("click", showTools);

    solutionButton.addEventListener("click", showSolution);


    // =========================================================
    // INITIAL TOY STORE VIEW
    // =========================================================

    clearActivity();

    riddleDisplay.textContent =
        "Please choose Riddles, Shape Poems, or the Bonus Problem above.";

})();