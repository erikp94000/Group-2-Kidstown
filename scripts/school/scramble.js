(function () {
    "use strict";

    // Original data: data/school/e_data1.txt/e_data2.txt/e_data3.txt (shared with Word Fun)
    const LEVELS = {
        short: {
            label: "short words",
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
        longer: {
            label: "longer words",
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
        longest: {
            label: "longest words",
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

    const levelPicker = document.getElementById("scramble-level-picker");
    const game = document.getElementById("scramble-game");
    const startButton = document.getElementById("scramble-start-button");

    let currentLevel = null;
    let currentWord = null;
    let scrambled = null;
    let tries = 0;

    function scrambleWord(word) {
        let letters;
        do {
            letters = word.split("");
            for (let i = letters.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [letters[i], letters[j]] = [letters[j], letters[i]];
            }
        } while (letters.join("") === word);
        return letters.join("");
    }

    function pickWord(levelKey) {
        const words = LEVELS[levelKey].words;
        return words[Math.floor(Math.random() * words.length)];
    }

    function startGame() {
        const selected = levelPicker.querySelector("input[name=level]:checked");
        currentLevel = selected ? selected.value : "short";
        levelPicker.hidden = true;
        game.hidden = false;
        newWord();
    }

    function newWord() {
        currentWord = pickWord(currentLevel);
        scrambled = scrambleWord(currentWord.word);
        tries = 0;
        renderGame(null);
    }

    function renderGame(errorText) {
        game.innerHTML = "";

        const img = document.createElement("img");
        img.src = IMAGE_PATH + currentWord.graphic;
        img.alt = "What is this picture?";
        img.className = "school-word__result-image";
        game.appendChild(img);

        const prompt = document.createElement("div");
        prompt.className = "school-word__result-heading";
        prompt.textContent = "What is this picture?";
        game.appendChild(prompt);

        const scrambledEl = document.createElement("div");
        scrambledEl.className = "school-word__scrambled";
        scrambledEl.textContent = "Scrambled Word: " + scrambled;
        game.appendChild(scrambledEl);

        if (errorText) {
            const err = document.createElement("div");
            err.className = "school-word__error";
            err.textContent = errorText;
            game.appendChild(err);
        }

        const form = document.createElement("form");
        form.className = "school-word__guess-form";
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            checkGuess(input.value);
        });

        const input = document.createElement("input");
        input.type = "text";
        input.maxLength = currentWord.word.length;
        input.className = "school-word__guess-input";
        input.setAttribute("aria-label", "Enter your guess");
        form.appendChild(input);

        const submit = document.createElement("button");
        submit.type = "submit";
        submit.className = "btn";
        submit.textContent = "Continue";
        form.appendChild(submit);

        game.appendChild(form);
        input.focus();

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

    function checkGuess(guess) {
        guess = guess.toUpperCase();

        if (guess.length !== currentWord.word.length) {
            renderGame("The input should be of length " + currentWord.word.length + ".");
            return;
        }

        if (!/^[A-Z]+$/.test(guess)) {
            renderGame("Only use letters for input.");
            return;
        }

        tries++;

        if (guess !== currentWord.word) {
            renderGame("That's not quite it \u2014 try again!");
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
