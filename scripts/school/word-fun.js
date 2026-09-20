(function () {
    "use strict";

    // Original data: data/school/e_data1.txt (easy), e_data2.txt (medium), e_data3.txt (difficult)
    const LEVELS = {
        easy: {
            label: "Easy",
            examples: "fish, ball, and bed",
            words:
    [
        { word: "SOCK", sentence: "People wear socks on their feet.", graphic: "sock1.gif" },
        { word: "COW", sentence: "When a cow is hungry it eats grass.", graphic: "cow3.jpg" },
        { word: "BOOK", sentence: "Reading a book is fun.", graphic: "book.gif" },
        { word: "PIG", sentence: "A pig likes to roll in the mud.", graphic: "pig1.jpg" },
        { word: "LION", sentence: "A lion lives in Africa.", graphic: "lion1.jpg" },
        { word: "BED", sentence: "Many people sleep in beds.", graphic: "bed2.gif" },
        { word: "BAT", sentence: "You can look for a bat in a cave.", graphic: "bat.jpg" },
        { word: "RAIN", sentence: "You get wet in the rain.", graphic: "rain.jpg" },
        { word: "FISH", sentence: "My fish lives in a fishbowl.", graphic: "fish1.jpg" },
        { word: "SLED", sentence: "You can use your sled in winter.", graphic: "sled.jpg" },
        { word: "CAT", sentence: "Some cats chase mice.", graphic: "cat1.jpg" },
        { word: "LEMON", sentence: "Most lemons are so sour that they make your mouth pucker.", graphic: "lemons2.jpg" },
        { word: "EYES", sentence: "Your eyes are part of your face.", graphic: "eyes.jpg" },
        { word: "BEE", sentence: "We get honey from bees.", graphic: "bee2.jpg" },
        { word: "BREAD", sentence: "Bakers use wheat to make bread.", graphic: "bread.jpg" },
    ]
        },
        medium: {
            label: "Medium",
            examples: "basketball, flying, and staple",
            words:
    [
        { word: "HAMMER", sentence: "A hammer is used to pound nails.", graphic: "hammer.jpg" },
        { word: "CLOCK", sentence: "A clock is used to tell time.", graphic: "clock.jpg" },
        { word: "HOUSE", sentence: "A house has a roof.", graphic: "house.jpg" },
        { word: "FRUIT", sentence: "Eating fruit is good for you.", graphic: "fruit1.jpg" },
        { word: "SNAIL", sentence: "A snail moves slowly.", graphic: "snail1.jpg" },
        { word: "SWING", sentence: "It is fun to play on a swing.", graphic: "swing4.gif" },
        { word: "HORSE", sentence: "People ride on the back of a horse.", graphic: "horse1.jpg" },
        { word: "ZEBRA", sentence: "A zebra has black and white stripes.", graphic: "zebra1.jpg" },
        { word: "DINOSAUR", sentence: "Some dinosaurs ate meat and others ate plants.", graphic: "DINO3.jpg" },
        { word: "SPIDER", sentence: "All spiders have eight legs.", graphic: "Spider2.jpg" },
        { word: "BANANA", sentence: "Monkeys like to eat bananas.", graphic: "banana2.jpg" },
        { word: "COMPUTER", sentence: "Games can be played on a computer.", graphic: "comp3.jpg" },
        { word: "MOUSE", sentence: "A mouse is used to move the cursor on a computer screen.", graphic: "compmouse1.gif" },
        { word: "CAMERA", sentence: "A picture is taken with a camera.", graphic: "camera1.jpg" },
        { word: "DOLPHIN", sentence: "The sea is home to dolphins and whales.", graphic: "dolphin1.jpg" },
        { word: "VOLCANO", sentence: "Lava flows from a volcano.", graphic: "volcano1.jpg" },
    ]
        },
        difficult: {
            label: "Difficult",
            examples: "stethoscope and application",
            words:
    [
        { word: "PRESENT", sentence: "Opening a present is exciting.", graphic: "present2.gif" },
        { word: "HELICOPTER", sentence: "A helicopter can take off vertically.", graphic: "helicopter1.gif" },
        { word: "TOUCAN", sentence: "A toucan has a large beak.", graphic: "toucan1.jpg" },
        { word: "STETHOSCOPE", sentence: "A doctor uses a stethoscope to listen to your heart.", graphic: "stethoscope.jpg" },
        { word: "FALLING", sentence: "Carelessness can cause falling.", graphic: "falling3.gif" },
        { word: "SQUIRREL", sentence: "Some squirrels eat nuts.", graphic: "squirrel1.jpg" },
        { word: "WOODPECKER", sentence: "A woodpecker pecks insects out of trees.", graphic: "woodpec1.jpg" },
        { word: "PENGUIN", sentence: "Many penguins live at the South Pole.", graphic: "penguin1.jpg" },
    ]
        }
    };

    const IMAGE_PATH = "graphics/school/";
    const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    const levelPicker = document.getElementById("wordfun-level-picker");
    const game = document.getElementById("wordfun-game");
    const startButton = document.getElementById("wordfun-start-button");

    let currentLevel = null;
    let currentWord = null;
    let guessedLetters = [];
    let tries = 0;

    function pickWord(levelKey) {
        const words = LEVELS[levelKey].words;
        return words[Math.floor(Math.random() * words.length)];
    }

    function startGame() {
        const selected = levelPicker.querySelector("input[name=level]:checked");
        currentLevel = selected ? selected.value : "easy";
        levelPicker.hidden = true;
        game.hidden = false;
        newWord();
    }

    function newWord() {
        currentWord = pickWord(currentLevel);
        guessedLetters = [];
        tries = 0;
        renderGame();
    }

    function renderGame() {
        game.innerHTML = "";

        const blanks = document.createElement("div");
        blanks.className = "school-word__blanks";
        blanks.textContent = currentWord.word
            .split("")
            .map(function (letter) {
                return guessedLetters.includes(letter) ? letter : "_";
            })
            .join(" ");
        game.appendChild(blanks);

        const keyboard = document.createElement("div");
        keyboard.className = "school-word__keyboard";

        ALPHABET.forEach(function (letter) {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "school-word__key";
            button.textContent = letter;

            if (guessedLetters.includes(letter)) {
                button.disabled = true;
                button.classList.add(
                    currentWord.word.includes(letter)
                        ? "school-word__key--hit"
                        : "school-word__key--miss"
                );
            }

            button.addEventListener("click", function () {
                guessLetter(letter);
            });

            keyboard.appendChild(button);
        });

        game.appendChild(keyboard);

        const changeLevelButton = document.createElement("button");
        changeLevelButton.type = "button";
        changeLevelButton.className = "btn school-word__change-level";
        changeLevelButton.textContent = "Change Level";
        changeLevelButton.addEventListener("click", function () {
            game.hidden = true;
            levelPicker.hidden = false;
        });
        game.appendChild(changeLevelButton);

        checkComplete();
    }

    function guessLetter(letter) {
        if (guessedLetters.includes(letter)) {
            return;
        }

        guessedLetters.push(letter);
        tries++;
        renderGame();
    }

    function checkComplete() {
        const solved = currentWord.word
            .split("")
            .every(function (letter) { return guessedLetters.includes(letter); });

        if (!solved) {
            return;
        }

        game.innerHTML = "";

        const heading = document.createElement("div");
        heading.className = "school-word__result-heading";
        heading.textContent = "That's correct! The word is " + currentWord.word + ".";
        game.appendChild(heading);

        const triesLine = document.createElement("div");
        triesLine.className = "school-word__tries";
        triesLine.textContent = "Good job, you got it in " + tries + (tries === 1 ? " try!" : " tries!");
        game.appendChild(triesLine);

        const img = document.createElement("img");
        img.src = IMAGE_PATH + currentWord.graphic;
        img.alt = currentWord.word;
        img.className = "school-word__result-image";
        game.appendChild(img);

        const sentenceEl = document.createElement("p");
        const highlighted = currentWord.sentence.replace(
            new RegExp(currentWord.word, "gi"),
            function (match) { return "<strong class=\"school-word__highlight\">" + match + "</strong>"; }
        );
        sentenceEl.innerHTML = highlighted;
        sentenceEl.className = "school-word__sentence";
        game.appendChild(sentenceEl);

        const again = document.createElement("button");
        again.type = "button";
        again.className = "btn";
        again.textContent = "Play Again";
        again.addEventListener("click", newWord);
        game.appendChild(again);

        const changeLevelButton = document.createElement("button");
        changeLevelButton.type = "button";
        changeLevelButton.className = "btn school-word__change-level";
        changeLevelButton.textContent = "Change Level";
        changeLevelButton.addEventListener("click", function () {
            game.hidden = true;
            levelPicker.hidden = false;
        });
        game.appendChild(changeLevelButton);
    }

    startButton.addEventListener("click", startGame);

})();
