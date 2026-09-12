const riddles = [
    {
        question: `I wear a multicolored coat 
        of ribbons, green, yellow and blue 
        I shine after each rain 
        To bring good luck 
        To all of you.`,
        answer: "It is a rainbow"
    },

    {
        question: `Blow it up
        and watch the skin
        grow bigger.
        Twist a string to it.
        Tie it.
        See it floating there
        way above you
        in the air`,
        answer: "It is a balloon."
    },

    {
        question: `Once these creatures roamed
        the world alone
        Now they are fossil.
        Now they are bone.
        You can see them
        in the halls of
        the natural history museum.`,
        answer: "They are dinosaurs."
    },

    {
        question: `Over six feet tall,
        with black and white feathers,
        and two long feet,
        you will find me
        at the zoo street.`,
        answer: "I am an ostrich."
    },

    {
        question: `I am the color of milky white
        falling through the air
        landing on things
        to light there.`,
        answer: "I am a snow flake."
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
        answer: "I am a cattail."
    },

    {
        question: `They are yellow at first
        then fluffy white
        hundreds grouped together
        they will foat away
        in autumn days
        upon windy weather.`,
        answer: "I am a dandelion."
    }
];

const shapePoems = [
    {
        image: "star.gif",
        question: "What shape do you see?",
        answerTitle: "DID YOU SEE A STAR?",
        answerText: `Stars are so bright,
        shining above us all.
        Millions and billions
        shining from dusk to dawn
        with silver light, so pretty.`
    },

    {
        question: "What shape do you see?",
        answerTitle: "DID YOU SEE A LEAF?",
        answerText: `Leaves are so neat.
        Green, gold, brown and last but not least red.
        falling, dancing & playing,
        they're neat.`
    },

    {
        question: "What shape do you see?",
        answerTitle: "DID YOU SEE A CRESCENTMOON?",
        answerText: `Have you ever thought about the moon?
        Peaceful and sleepy
        with all its craters and of course mountains.
        It lets you go to sleep.`
    },

    {
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
        question: "What shape do you see?",
        answerTitle: "DID YOU SEE A FOUR LEAF CLOVER?",
        answerText:    `I once found a four leaf clover.
        "Oh wow,"
        I thought, "It'll bring me good luck."
        O.k. I wish I never found it.
        Never found it!
        That day I fell down the stairs
        and I got kicked in the shins, O.K.
        Pooh on that four leaf clover.`
    }
];

const riddleDisplay = document.getElementById("riddle-display");
const answerDisplay = document.getElementById("answer-display");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-button");
const shapeButton = document.getElementById("shape-button");
const nextShapeButton = document.getElementById("next-shape-button");
const problemButton = document.getElementById("problem-button");
const toolsButton = document.getElementById("tools-button");
const solutionButton = document.getElementById("solution-button");

let currentRiddle = 0;
let currentShape = 0;
let currentSection = "riddles";

function showRiddle(index) {
    currentRiddle = index;
    riddleDisplay.textContent = riddles[index].question;
    answerDisplay.textContent = "";

    answerButton.hidden = false;
    nextButton.hidden = true;
    shapeButton.hidden = true;
}

function showAnswer() {
    if (currentSection === "riddles") {
        answerDisplay.textContent = riddles[currentRiddle].answer;

        answerButton.hidden = true;

        if (currentRiddle < riddles.length - 1) {
            nextButton.hidden = false;
        } else {
            shapeButton.hidden = false;
        }

    } else if (currentSection === "shapes") {
    answerDisplay.textContent =
        shapePoems[currentShape].answerTitle +
        "\n\n" +
        shapePoems[currentShape].answerText;

    answerButton.hidden = true;

   if (currentShape < shapePoems.length - 1) {
        nextShapeButton.hidden = false;
    } else {
        problemButton.hidden = false;
    }
    }
}

function nextRiddle() {
    showRiddle(currentRiddle + 1);
}

function startShapePoems() {
    currentSection = "shapes";
    showShape(0);
}

function showShape(index) {
    currentShape = index;

    riddleDisplay.textContent = shapePoems[index].question;
    answerDisplay.textContent = "";

    answerButton.hidden = false;
    nextShapeButton.hidden = true;
    nextButton.hidden = true;
    shapeButton.hidden = true;
    problemButton.hidden = true;
}

function nextShape() {
    showShape(currentShape + 1);
}

function startBonusProblem() {
    currentSection = "problem";

    riddleDisplay.textContent =
        `BONUS PROBLEM:

Ping pong (table tennis) is a fun game to play,
but sometimes the ball gets away and rolls into a hole.
That is exactly what happened to this man.
The problem is, he can not reach the ball.

Can you help him retrieve the ball?`;

    answerDisplay.textContent = "";

    answerButton.hidden = true;
    nextButton.hidden = true;
    shapeButton.hidden = true;
    nextShapeButton.hidden = true;
    problemButton.hidden = true;

    toolsButton.hidden = false;
    solutionButton.hidden = true;
}

function showTools() {
    riddleDisplay.textContent =
        `HERE ARE THE AVAILABLE TOOLS:

There is a bucket of water, a broom, a shovel,
a roll of string, and a dust pan.

What tools would you use to get the ball out of the hole?`;

    answerDisplay.textContent = "";

    toolsButton.hidden = true;
    solutionButton.hidden = false;
}

function showSolution() {
    riddleDisplay.textContent = "DID YOU THINK OF THE WATER?";

    answerDisplay.textContent =
        `There are multiple ways to retrieve the ping pong ball.
A simple way is to fill the hole with the water from the bucket,
and let the ball float to the top of the hole.
From there, you can reach and grab it.`;

    solutionButton.hidden = true;
}

nextButton.addEventListener("click", nextRiddle);

answerButton.addEventListener("click", showAnswer);

shapeButton.addEventListener("click", startShapePoems);

nextShapeButton.addEventListener("click", nextShape);

problemButton.addEventListener("click", startBonusProblem);

toolsButton.addEventListener("click", showTools);

solutionButton.addEventListener("click", showSolution);

showRiddle(0);