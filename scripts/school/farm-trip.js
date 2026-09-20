(function () {
    "use strict";

    const IMAGE_PATH = "graphics/school/";

    // Original data: scripts/school/FarmTown1.pl through FarmTown5.pl
    const START = {
        image: "AZP00022.GIF",
        farmerImage: "AZS00001.GIF",
        text: `You have just arrived at Zeek's farm. Zeek lives on a farm in the
            country. This is a picture of Zeek's farm.`,
        quote: `"Hello! Welcome to my farm! You can just call me Zeek.
            Let's get started on your tour!"`
    };

    const ANIMALS_INTRO = {
        image: "AZQ00002.GIF",
        text: `Zeek has many jobs to do on the farm. He has to feed all of his
            animals. Here is Zeek feeding his animals. One of Zeek's jobs is to
            take care of the animals that live on the farm. He takes care of
            cows, pigs, horses, sheep and chickens.`
    };

    const ANIMALS = [
        {
            key: "cows",
            label: "Cows",
            title: "Cows",
            image: "ABY50289.jpg",
            paragraphs: [
                "Cows produce milk. They are milked two to three times a day by the farmer.",
                "A baby cow is called a calf. Grown-ups are called heifers and bulls.",
                `Milk is used in making cheese, butter and ice cream. Cows eat the
                <a href="#" data-goto="crop:hay">hay</a> and
                <a href="#" data-goto="crop:corn">corn</a> that grow in the fields.`
            ]
        },
        {
            key: "pigs",
            label: "Pigs",
            title: "Pigs",
            image: "ACC50134.jpg",
            paragraphs: [
                `Pigs like to play in the mud. That's why they always seem to be
                dirty. On Zeek's farm, pigs live in this <strong>pig pen</strong>.`,
                `Baby pigs are called piglets. Grown-ups are called sows and boars.
                Pigs' noses are called snouts. They use their snouts to dig up
                roots and grubs in the ground to eat.`,
                "Pigs like to eat a lot and will eat almost anything. When pigs eat, they really <em>pig out!</em>"
            ]
        },
        {
            key: "horses",
            label: "Horses",
            title: "Horses",
            image: "ACB50144.jpg",
            paragraphs: [
                `Horses help with many of the jobs on the farm. Before farmers had
                tractors to help with planting and harvesting, horses were used
                to pull plows and other farm equipment. Horses still help
                farmers by pulling wagons and buggies.`,
                "Baby horses are called colts. Grown-ups are called mares and stallions. Zebras and donkeys are cousins of horses.",
                "Farmers sometimes ride horses as they care for other animals by not letting them wander too far away. Horses also like to play and <em>horse around!</em>"
            ]
        },
        {
            key: "sheep",
            label: "Sheep",
            title: "Sheep",
            image: "ACE50059.jpg",
            paragraphs: [
                "Sheep have a thick coat of wool that we call <strong>fleece</strong>. The fleece is sheared off, cleaned, spun, and made into clothes and blankets.",
                "Baby sheep are called lambs. Grown-ups are called ewes and rams.",
                `Sheep live together in groups called <strong>flocks</strong>. They
                eat grass that grows in the fields.
                <a href="#" data-goto="animal:dogs">Dogs</a> sometimes help
                farmers <strong>herd</strong> the sheep, keeping them together
                and out of danger.`
            ]
        },
        {
            key: "chickens",
            label: "Chickens",
            title: "Chickens",
            image: "ABX50047.jpg",
            paragraphs: [
                "On Zeek's farm, chickens live in a <strong>chicken coop</strong>. This is where the chickens will lay eggs. Chickens eat insects and grain by pecking at them on the ground.",
                "Baby chickens are called chicks. Grown-ups are called hens and roosters. Roosters wake up farmers in the morning by crowing to announce the beginning of a new day.",
                "Chickens lay eggs that are gathered and used for food. Chicken feathers are used to make pillows."
            ]
        },
        {
            key: "dogs",
            label: "Dogs",
            title: "Dogs",
            image: "ACU50036.jpg",
            paragraphs: [
                "Dogs help on the farm by rounding up the other animals so that they can find their way home. They can also go get help if someone is in trouble.",
                "Baby dogs are called puppies.",
                "Dogs are known as the farmer's best friend. They protect farmers and their families by barking to warn of danger. Many dogs like to play fetch by chasing after sticks and bringing them back."
            ]
        },
        {
            key: "cats",
            label: "Cats",
            title: "Cats",
            image: "ACT50369.jpg",
            paragraphs: [
                "Cats like to chase and play with each other around the farm. They also chase small rodents like mice. On Zeek's farm, cats can usually be found playing in the barn.",
                `Baby cats are called kittens. Zeek's cats like to drink the milk
                from his <a href="#" data-goto="animal:cows">cows</a>. They
                mostly like to nap and cuddle.`,
                `Cats like to play with balls of yarn made using the wool from
                <a href="#" data-goto="animal:sheep">sheep</a>. Zeek's cats
                also like to climb trees.`
            ]
        }
    ];

    const SEASONS = {
        image: "AZR00003.GIF",
        paragraphs: [
            "Zeek grows vegetables in his fields and fruit in his orchards.",
            "Zeek has different jobs to do in the different seasons of the year. There are four seasons: <strong>Spring, Summer, Fall</strong> and <strong>Winter</strong>.",
            "<strong>Zeek's year begins with the season of Spring.</strong> This season is also known as the farmer's planting season. Farmers go out into their fields and plant seeds in the ground so they will grow.",
            "<strong>After Spring comes Summer.</strong> During the Summer the plants will grow big and tall. Rain and sunshine helps the plants to grow.",
            "<strong>After Summer comes Fall.</strong> This season is known as harvest season. That's when farmers go out into the fields and gather the plants that grew during the Spring and Summer.",
            "<strong>After Fall comes Winter.</strong> During the Winter, some of the fruits on the orchard trees will ripen and can be picked.",
            "Here is Zeek getting ready to go out to his fields. We better get going!"
        ]
    };

    const CROPS_INTRO = {
        image: "AZO00008.GIF",
        text: `Zeek grows many different kinds of vegetables and grains in his
            fields. Some of the vegetables are
            <a href="#" data-goto="crop:corn">corn</a> and
            <a href="#" data-goto="crop:pumpkins">pumpkins</a>. Some of the
            grains are <a href="#" data-goto="crop:hay">hay</a> and
            <a href="#" data-goto="crop:wheat">wheat</a>. Zeek grows many
            different kinds of fruits in his orchards and vineyards. Some of
            the fruits are <a href="#" data-goto="crop:apples">apples</a>,
            <a href="#" data-goto="crop:oranges">oranges</a> and
            <a href="#" data-goto="crop:grapes">grapes</a>. After Zeek has
            gathered all of the vegetables and fruits, he sells them to be
            sent to grocery stores and supermarkets.`
    };

    const CROPS = [
        {
            key: "corn",
            label: "Corn",
            title: "Corn",
            image: "SSGP1195.jpg",
            paragraphs: [
                "Some farmers plant corn in their fields. Corn plants grow tall and have many, long, deep green leaves.",
                "The top of the corn plant is called a <strong>tassel</strong>. Each corn plant may have several ears of corn growing on it. Farmers can use a machine called a <strong>combine</strong> to pick the corn.",
                "There are many different types of corn plants. Some corn is called Indian Corn and has kernels with several different colors. The corn mostly found in supermarkets is called sweet corn. The corn called popcorn has kernels that pop when heated."
            ]
        },
        {
            key: "hay",
            label: "Hay",
            title: "Hay",
            image: "SSGP1724.jpg",
            paragraphs: [
                `<a href="#" data-goto="animal:cows">Cows</a> and
                <a href="#" data-goto="animal:horses">horses</a> eat hay. Hay
                is tall grass that is grown and dried in the Summer.`,
                "Farmers bale the hay to make it easier to store it in their barns. Stored hay will be used to feed the animals during Winter. Bales of hay can be either round or square-shaped.",
                "After Zeek puts the hay into his barn, he likes to lie on it and take a nap!"
            ]
        },
        {
            key: "wheat",
            label: "Wheat",
            title: "Wheat",
            image: "B41327.jpg",
            paragraphs: [
                "Some farmers grow wheat in their fields. Wheat that is planted in the Fall is called <strong>Winter Wheat</strong> because it grows during the Winter.",
                "This wheat is harvested in the Spring. Farmers can then use the same fields to plant other crops such as corn or hay.",
                "Wheat is used to make flour. Flour can then be used to make cereal and bread."
            ]
        },
        {
            key: "pumpkins",
            label: "Pumpkins",
            title: "Pumpkins",
            image: "671700.jpg",
            paragraphs: [
                "Here are pumpkins in one of Zeek's fields. Pumpkins can be used to feed the animals.",
                `You can also make delicious pies out of them. Pumpkin pies can
                be served with whipped cream made from the milk of
                <a href="#" data-goto="animal:cows">cows</a>.`,
                "Zeek likes to grow pumpkins because they can be carved into Jack-O-Lanterns for Halloween."
            ]
        },
        {
            key: "apples",
            label: "Apples",
            title: "Apples",
            image: "B41300.jpg",
            paragraphs: [
                "Here are apples growing in one of the orchards. Zeek will sometimes just pick an apple right off the tree and eat it.",
                "He has to be careful when he does that, because some worms like to eat apples too!",
                "Zeek likes to grow apples because he can make apple pies and caramel apples."
            ]
        },
        {
            key: "oranges",
            label: "Oranges",
            title: "Oranges",
            image: "B9451.jpg",
            paragraphs: [
                "These oranges grow in one of the orchards. Oranges are squeezed to make orange juice.",
                "You can peel off the outer part of the orange, called the <strong>rind</strong>, and eat the sweet and juicy inner segments.",
                "Zeek likes to grow oranges because he can eat them for snacks. Oranges also contain Vitamin C that helps people to stay healthy."
            ]
        },
        {
            key: "grapes",
            label: "Grapes",
            title: "Grapes",
            image: "SSGP1004.jpg",
            paragraphs: [
                "Grapes grow on vines in a vineyard. Grapes come in different colors like purple, red and green.",
                "They are squeezed to make grape juice or can be eaten as a snack. If the grapes are picked and left in the Sun to dry out, they become raisins.",
                "Raisins are used for snacks and to put on breakfast cereal. Zeek also uses his grapes to make grape jelly."
            ]
        }
    ];

    const END = {
        image: "CKC01001.GIF",
        text: `"Come back and see us again real soon!" "Thanks for visiting!"
            "I hope you had a great time on the farm!"`
    };

    const display = document.getElementById("farm-display");
    const subNav = document.getElementById("farm-sub-nav");

    // NOTE: this is in-page navigation within the farm-trip activity, not
    // real SPA routes -- it deliberately does NOT touch window.location.hash,
    // since app.js's hashchange listener would try to fetch a matching
    // zones/school/farm-trip/<view>.html fragment (which doesn't exist) and
    // stomp this view with the "Zone not ready yet" fallback.
    function goto(view) {
        render(view);
    }

    function wireGotoLinks(container) {
        container.querySelectorAll("[data-goto]").forEach(function (link) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                goto(link.dataset.goto);
            });
        });
    }

    function renderTopNav(active) {
        const nav = document.createElement("div");
        nav.className = "school-farm__top-nav";

        [
            { key: "start", label: "Start" },
            { key: "animals", label: "Animals" },
            { key: "seasons", label: "Crops" },
            { key: "end", label: "End" }
        ].forEach(function (item) {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "btn school-farm__top-nav-button";
            if (active === item.key) {
                btn.classList.add("school-farm__top-nav-button--active");
            }
            btn.textContent = item.label;
            btn.addEventListener("click", function () { goto(item.key); });
            nav.appendChild(btn);
        });

        return nav;
    }

    function renderAnimalPicker(activeKey) {
        subNav.innerHTML = "";
        subNav.hidden = false;

        const prompt = document.createElement("p");
        prompt.className = "school-farm__sub-nav-prompt";
        prompt.textContent = "Which animals should we visit next?";
        subNav.appendChild(prompt);

        const list = document.createElement("div");
        list.className = "school-farm__sub-nav-list";
        ANIMALS.forEach(function (animal) {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "btn school-farm__sub-nav-button";
            if (animal.key === activeKey) {
                btn.classList.add("school-farm__sub-nav-button--active");
            }
            btn.textContent = animal.label;
            btn.addEventListener("click", function () { goto("animal:" + animal.key); });
            list.appendChild(btn);
        });
        subNav.appendChild(list);
    }

    function renderCropPicker(activeKey) {
        subNav.innerHTML = "";
        subNav.hidden = false;

        const prompt = document.createElement("p");
        prompt.className = "school-farm__sub-nav-prompt";
        prompt.textContent = "Which crop should we visit next?";
        subNav.appendChild(prompt);

        const list = document.createElement("div");
        list.className = "school-farm__sub-nav-list";
        CROPS.forEach(function (crop) {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "btn school-farm__sub-nav-button";
            if (crop.key === activeKey) {
                btn.classList.add("school-farm__sub-nav-button--active");
            }
            btn.textContent = crop.label;
            btn.addEventListener("click", function () { goto("crop:" + crop.key); });
            list.appendChild(btn);
        });
        subNav.appendChild(list);
    }

    function hideSubNav() {
        subNav.hidden = true;
        subNav.innerHTML = "";
    }

    function render(view) {
        display.innerHTML = "";

        if (view === "start") {
            hideSubNav();
            display.appendChild(renderTopNav("start"));

            const card = document.createElement("div");
            card.className = "school-farm__card";
            card.innerHTML = `
                <h2>Field-Trip to a Farm</h2>
                <p><strong>You have just arrived at Zeek's farm.</strong></p>
                <p>${START.text}</p>
                <img src="${IMAGE_PATH}${START.image}" alt="Zeek's farm" class="school-farm__image">
                <div class="school-farm__quote-row">
                    <img src="${IMAGE_PATH}${START.farmerImage}" alt="Farmer Zeek" class="school-farm__portrait">
                    <p class="school-farm__quote">${START.quote}</p>
                </div>
                <div class="school-farm__choice-list">
                    <button type="button" class="btn" data-choice="animals">See the animals</button>
                    <button type="button" class="btn" data-choice="seasons">See the plants</button>
                </div>
            `;
            display.appendChild(card);
            card.querySelector('[data-choice="animals"]').addEventListener("click", function () { goto("animals"); });
            card.querySelector('[data-choice="seasons"]').addEventListener("click", function () { goto("seasons"); });
            return;
        }

        if (view === "animals") {
            display.appendChild(renderTopNav("animals"));
            renderAnimalPicker(null);

            const card = document.createElement("div");
            card.className = "school-farm__card";
            card.innerHTML = `
                <p>${ANIMALS_INTRO.text}</p>
                <img src="${IMAGE_PATH}${ANIMALS_INTRO.image}" alt="Zeek feeding his animals" class="school-farm__image">
            `;
            display.appendChild(card);
            return;
        }

        if (view.indexOf("animal:") === 0) {
            const key = view.slice("animal:".length);
            const animal = ANIMALS.find(function (a) { return a.key === key; });

            display.appendChild(renderTopNav("animals"));
            renderAnimalPicker(key);

            const card = document.createElement("div");
            card.className = "school-farm__card";
            card.innerHTML = `
                <h2>${animal.title}</h2>
                <img src="${IMAGE_PATH}${animal.image}" alt="${animal.title}" class="school-farm__image">
                ${animal.paragraphs.map(function (p) { return "<p>" + p + "</p>"; }).join("")}
            `;
            display.appendChild(card);
            wireGotoLinks(card);
            return;
        }

        if (view === "seasons") {
            hideSubNav();
            display.appendChild(renderTopNav("seasons"));

            const card = document.createElement("div");
            card.className = "school-farm__card";
            card.innerHTML = `
                <h2>The Seasons</h2>
                ${SEASONS.paragraphs.map(function (p) { return "<p>" + p + "</p>"; }).join("")}
                <img src="${IMAGE_PATH}${SEASONS.image}" alt="Zeek heading to his fields" class="school-farm__image">
                <div class="school-farm__choice-list">
                    <button type="button" class="btn" data-choice="crops">See what grows in Zeek's fields and orchards</button>
                </div>
            `;
            display.appendChild(card);
            card.querySelector('[data-choice="crops"]').addEventListener("click", function () { goto("crops"); });
            return;
        }

        if (view === "crops") {
            display.appendChild(renderTopNav("seasons"));
            renderCropPicker(null);

            const card = document.createElement("div");
            card.className = "school-farm__card";
            card.innerHTML = `
                <img src="${IMAGE_PATH}${CROPS_INTRO.image}" alt="Zeek's crops" class="school-farm__image">
                <p>${CROPS_INTRO.text}</p>
            `;
            display.appendChild(card);
            wireGotoLinks(card);
            return;
        }

        if (view.indexOf("crop:") === 0) {
            const key = view.slice("crop:".length);
            const crop = CROPS.find(function (c) { return c.key === key; });

            display.appendChild(renderTopNav("seasons"));
            renderCropPicker(key);

            const card = document.createElement("div");
            card.className = "school-farm__card";
            card.innerHTML = `
                <h2>${crop.title}</h2>
                <img src="${IMAGE_PATH}${crop.image}" alt="${crop.title}" class="school-farm__image">
                ${crop.paragraphs.map(function (p) { return "<p>" + p + "</p>"; }).join("")}
            `;
            display.appendChild(card);
            wireGotoLinks(card);
            return;
        }

        if (view === "end") {
            hideSubNav();
            display.appendChild(renderTopNav("end"));

            const card = document.createElement("div");
            card.className = "school-farm__card";
            card.innerHTML = `
                <h2>Thanks for Visiting!</h2>
                <p>Zeek would like to thank you for coming and joining him on his farm.</p>
                <div class="school-farm__quote-row">
                    <img src="${IMAGE_PATH}${END.image}" alt="Zeek waving goodbye" class="school-farm__portrait">
                    <p class="school-farm__quote">${END.text}</p>
                </div>
                <div class="school-farm__choice-list">
                    <a href="#school" class="btn">Return to School</a>
                </div>
            `;
            display.appendChild(card);
            return;
        }
    }

    render("start");

})();
