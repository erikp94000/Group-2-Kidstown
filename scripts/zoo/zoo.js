const regions = [
    {
        name: "Ocean",
        description: `Oceans cover more than two-thirds of the Earth's surface. The greatest variety of life is found in the oceans. Most ocean animals live in the warm, shallow waters surrounding the continents and islands. Yet, life can even be found deep in the ocean where light never reaches.`,
        animals: [
            {
                name: "CRABS",
                description: `A crab walks sideways instead of straight ahead, like most animals. A hard shell that covers its body helps protect it. However, in order to grow, a crab must shed its shell. After shedding, it is soft-bodied and very vulnerable. Once its new shell is hard and strong, the crab is ready to face the world again.`
            },
            {
                name: "SEAHORSES",
                description: `A seahorse swims in an upright position. Unlike most animals, the male seahorse gives birth. The male has a pouch on its stomach in which the female places her eggs. After hatching, the young seahorses stay inside the pouch for ten days. A male seahorse can give birth to as many as 600 young at one time.`
            },
            {
                name: "SHARKS",
                description: `Most sharks eat fish, sea lions, sea birds, and dolphins. They are very efficient hunters and have been nicknamed "eating machines" and "super predators." They use a combination of sight, smell, and a form of sonar to hunt their prey.`
            },
            {
                name: "STARFISH",
                description: `There are many types of starfish, also known as "sea stars," in the ocean. They can have as few as five arms or as many as forty. If a starfish loses an arm, it will grow a new one. The starfish's mouth is located on the underside of its body.`
            }
        ],
        challenge: {
        question: "What covers two-thirds of the surface of the Earth?",
        options: [
            {
                text: "Land",
                correct: false,
                feedback: "Land covers one-third of the surface of the Earth."
            },
            {
                text: "Trees",
                correct: false,
                feedback: `Trees do not cover two-thirds of the surface of the Earth.
                Trees supply most of the oxygen that people breathe.
                The oldest tree is 4,725 years old.`
            },
            {
                text: "Water",
                correct: true,
                feedback: "Yes, water covers over two-thirds of the surface of the Earth."
            }
        ]
        }
    },
    {
        name: "Africa",
        description: `In central Africa, many kinds of animals live on large, grass-covered plains. Animals that eat plants are herbivores. Some African herbivores are elephants, giraffes and hippos. Animals that eat only meat are carnivores. Lions are carnivores that live in Africa.`,
        animals: [
            {
                name: "ELEPHANTS",
                description: `The most amazing feature on an elephant is its long nose, called a trunk. The elephant uses its trunk to eat and drink. An elephant eats grass, leaves, twigs and fruits by wrapping its trunk around the food and bringing it up to its mouth. It drinks by sucking water up into its trunk, putting the trunk into its mouth, and then spraying the water down its throat.`
            },
            {
                name: "GIRAFFES",
                description: `Giraffes are the tallest land animals living in the world today. Because giraffes need to eat a lot of food in order to live, they spend about half of their lives eating. Giraffes eat leaves and twigs by curling their strong tongues around the food to pull it free.`
            },
            {
                name: "HIPPOPOTAMUS",
                description: `The word "hippo" is short for "hippopotamus," which means "horse of the river." Although hippos are very big, they do not eat as much food as you might think. They spend a few hours each day eating different kinds of grasses on land. To protect themselves from predators, hippos spend most of their time in water.`
            },
            {
                name: "LIONS",
                description: `Lions spend most of their time resting and sleeping. Lions sleep during the day when it is very hot. When they hunt, lions must sneak up on prey in order to catch it. Female lions do the hunting for their prides (family groups).`
            }
        ],
        challenge: {
        question: "What is the tallest land animal living in the world today?",
        options: [
            {
                text: "Elephant",
                correct: false,
                feedback: "The elephant is not the tallest animal in the world. The elephant is the largest land animal in the world. An adult male elephant can weigh up to 13,000 pounds!"
            },
            {
                text: "Giraffe",
                correct: true,
                feedback: `Giraffes are the tallest animals living in the world today. They can grow to be 19 feet tall!`
            },
            {
                text: "Hippopotamus",
                correct: false,
                feedback: "A hippopotamus can be big, but it is not the tallest animal in the world. Adult hippos are the second largest land animals in the world after elephants. They can grow to weigh 8,000 pounds!"
            }
        ]
        }
    },
    {
        name: "Australia",
        description: `Many unusual types of animals called marsupials are found on the island continent of Australia. Marsupials are unusual because the mother has a pouch on her stomach in which she carries her young. Some Australian marsupials are kangaroos and koala bears. Crocodiles are reptiles that live in Australia as well as other parts of the world. Off the coast of Australia is a coral reef called the Great Barrier Reef.`,
        animals: [
            {
                name: "KANGAROOS",
                description: `Kangaroos stand tall by balancing on their big hind feet and thick tail. They can move very quickly by jumping in long leaps. A young kangaroo is called a "joey."`
            },
            {
                name: "KOALA BEARS",
                description: `Koala bears look like teddy bears come to life. They only eat the leaves of a few trees that live in Australia. Because the leaves are not very nutritious, the little bears have to move slowly to conserve energy. They spend a lot of time sleeping.`
            },
            {
                name: "CROCODILES",
                description: `The crocodile is a fierce animal that will attack any animal that comes near it. Although clumsy on land, it is an excellent swimmer. It spends much of its time drifting quietly under the surface of the water with only its eyes and nose showing.`
            },
            {
                name: "GREAT BARRIER REEF",
                description: `The Great Barrier Reef is a coral reef. Coral reefs are made of many tiny animals. As these animals grow, they build mini-fortresses around themselves. As the animals multiply, their fortresses join to form large structures in the ocean. Coral reefs provide food and shelter to many brightly colored fish that live in the sea.`
            }
        ],
        challenge: {
        question: "What do you call animals that have pouches to carry their young?",
        options: [
            {
                text: "Marsupials",
                correct: true,
                feedback:  `Animals that have pouches are called marsupials.

                            Both kangaroos and koalas are marsupials.`
            },
            {
                text: "Reptiles",
                correct: false,
                feedback: `Reptiles are cold-blooded animals that lay eggs.

                            Reptiles do not have pouches to carry their young. `
            },
            {
                text: "Herbivores",
                correct: false,
                feedback: `Herbivores are animals that eat plants.

                            Although some herbivores have pouches to carry their young, not all herbivores have pouches.`
            }
        ]
        }
    },
    {
        name: "Polar Regions",
        description: `The polar regions have extremely cold winters and only a few months of warm temperatures in the summer. Parts of Russia, Norway, Greenland, the United States, and Canada, and all of Antarctica lie within the polar regions. The tundra is a vast, treeless land in the Arctic. Much of the ground there stays frozen all the time. The extremely cold winters prevent most animals from living in the polar regions during those months. During the short summer, these animals return to live and feed. Some of these animals are arctic hares, caribou, polar bears, and wolves.`,
        animals: [
            {
                name: "ARCTIC HARES",
                description: `In order to survive the cold during the winter, an arctic hare grows a pure white coat of long, thick fur. This white fur makes the hare blend in with the snow. The hare has large hind feet which allow it to run on top of the snow without sinking. During the summer, its fur turns brown or gray.`
            },
            {
                name: "CARIBOU",
                description: `Caribou are actually reindeer that live in the North American Arctic lands. As spring approaches, huge herds of caribou travel north to spend their summer on the tundra. Unlike other types of deer, both the male and the female caribou have antlers.`
            },
            {
                name: "POLAR BEARS",
                description: `A polar bear is one of the largest carnivorous animals in the world. It is so powerful that it can kill a seal with one blow of a paw. In October, a female polar bear digs a large hole in the snow called a den. In her den, she gives birth to one or two cubs and does not come out with them until spring.`
            },
            {
                name: "WOLVES",
                description: `Wolves are predators and will eat almost anything, from caribou to mice, depending on the time of year and what food is available. Wolves live in groups called packs. A wolf pack usually contains about six wolves. One male wolf (the Alpha Male) leads the entire pack. One female wolf leads the females and the young. The Alpha Male shows he is the leader by holding his head up and raising his tail. The less important wolves crouch or roll over in front of him.`
            }
        ],
        challenge: {
        question: "Which animal's fur turns white in the winter and brown or gray in the summer?",
        options: [
            {
                text: "Polar Bear",
                correct: false,
                feedback:  `The polar bear's fur does not turn white in the winter and does not turn brown or gray in the summer. The polar bear's fur varies from pure white to a light yellow. The white fur is an important disguise for the polar bear as it hunts its prey on the ice pack.`
            },
            {
                text: "Arctic Hare",
                correct: true,
                feedback: `The arctic hare's fur turns white in the winter and brown or gray in the summer. In the winter, the arctic hare is white with black ear-tips. The underfur is dense and gray.`
            },
            {
                text: "Caribou",
                correct: false,
                feedback: `The caribou's fur does not turn white in the winter and does not turn brown or gray in the summer. The caribou's fur is typically brown and shaggy with a white neck and mane.`
            }
        ]
        }
    }
];

console.log(regions);

let currentRegion = 0;

const zooDisplay = document.getElementById("zoo-display");
const africaButton = document.getElementById("africa-button");
const australiaButton = document.getElementById("australia-button");
const polarButton = document.getElementById("polar-button");
const mapButton = document.getElementById("map-button");
const challengeButton = document.getElementById("challenge-button");
const challengeOptions = document.getElementById("challenge-options");
const worldMapImage = document.getElementById("world-map-image");
const zooHomeButton = document.getElementById("zoo-home-button");

function showZooHome() {
    zooDisplay.textContent =
        `Animals in this zoo are grouped together by where they live.

        Select one of the locations below to see some of the animals that live there.`;

        worldMapImage.hidden = true;
        challengeButton.hidden = true;
        zooHomeButton.hidden = true;
        challengeOptions.innerHTML = "";
}

const oceanButton = document.getElementById("ocean-button");

function showRegion(index) {
    currentRegion = index;

    worldMapImage.hidden = true;

    zooHomeButton.hidden = true;

    challengeOptions.innerHTML = "";

    const region = regions[index];

    zooDisplay.innerHTML = "";

    const title = document.createElement("h2");
    title.textContent = `Animals of the ${region.name}`;

    const description = document.createElement("p");
    description.textContent = region.description;

    zooDisplay.appendChild(title);
    zooDisplay.appendChild(description);

    const animalLinks = document.createElement("div");
    zooDisplay.appendChild(animalLinks);

    for (let i = 0; i < region.animals.length; i++) {
        const animal = region.animals[i];

        const animalId = animal.name.toLowerCase().replaceAll(" ", "-");

        const animalLink = document.createElement("a");
        animalLink.textContent = animal.name;
        animalLink.href = `#${animalId}`;

        animalLinks.appendChild(animalLink);

        if (i < region.animals.length - 1) {
            animalLinks.append(" | ");
        }

        const animalTitle = document.createElement("h3");
        animalTitle.textContent = animal.name;
        animalTitle.id = animalId;

        const animalDescription = document.createElement("p");
        animalDescription.textContent = animal.description;

        zooDisplay.appendChild(animalTitle);
        zooDisplay.appendChild(animalDescription);
    }
/*
    let content = `Animals of the ${region.name}

${region.description}

`;

    for (let i = 0; i < region.animals.length; i++) {
        content += `${region.animals[i].name}

${region.animals[i].description}

`;
    }

    zooDisplay.textContent = content;
*/

    challengeButton.hidden = !region.challenge;
}

function showWorldMap() {
    zooDisplay.textContent = "World Map";

    worldMapImage.hidden = false;
    zooHomeButton.hidden = false;

    challengeButton.hidden = true;
    challengeOptions.innerHTML = "";
}

function showChallenge() {
    const region = regions[currentRegion];
    const challenge = region.challenge;

    zooDisplay.textContent =
        `Zoo Keeper's Challenge

${challenge.question}`;

    challengeButton.hidden = true;
    challengeOptions.innerHTML = "";

    for (let i = 0; i < challenge.options.length; i++) {
        const button = document.createElement("button");

        button.textContent = challenge.options[i].text;

        button.addEventListener("click", function () {
            showChallengeResult(challenge.options[i]);
        });

        challengeOptions.appendChild(button);
    }
}

function showChallengeResult(option) {
    zooDisplay.textContent = option.feedback;

    challengeOptions.innerHTML = "";

    if (option.correct) {
        const backButton = document.createElement("button");
        backButton.textContent = `Go back to the Animals of the ${regions[currentRegion].name}.`;

        backButton.addEventListener("click", function () {
            showRegion(currentRegion);
        });

        challengeOptions.appendChild(backButton);
    } else {
        const tryAgainButton = document.createElement("button");
        tryAgainButton.textContent = "Please try again.";

        tryAgainButton.addEventListener("click", showChallenge);

        challengeOptions.appendChild(tryAgainButton);
    }
}

oceanButton.addEventListener("click", function () {
    showRegion(0);
});

africaButton.addEventListener("click", function () {
    showRegion(1);
});

australiaButton.addEventListener("click", function () {
    showRegion(2);
});

polarButton.addEventListener("click", function () {
    showRegion(3);
});

mapButton.addEventListener("click", showWorldMap);

challengeButton.addEventListener("click", showChallenge);

zooHomeButton.addEventListener("click", showZooHome);

showZooHome();