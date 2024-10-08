// Define an array of topics
const topics = [
    "Čo je najzvláštnejšie jedlo, ktoré si kedy jedol??",
    "Podeľ sa o nepríjemný moment, ktorý si zažil na verejnosti.",
    "Ak by si mohol na jeden deň vymeniť život s niekým, s kým a prečo?",
    "Čo je najabsurdnejšia vec, ktorú si urobil pre lásku?",
    "Opíš svoj najnepríjemnejšií zážitok z randenia.",
    "Ak by si mohol večerať s akýmkoľvek fiktívnym charakterom, s kým a prečo?",
    "Čo je najdivokejšia konšpiračná teória, ktorú si počul?",
    "Podeľ sa o svoje tajné potešenie.",
    "Ak by si mohol byť na jeden deň neviditeľný, čo by si robil?",
    "Čo je najbizarnnejší sen, ktorý si kedy mal?",
    "Ak by si bol jedným z jedlých pokrmov, ktorým by si bol?",
    "Podeľ sa o najhlúpejší strach, ktorý si kedy mal.",
    "Ktorý film ťa vždy rozosmeje, bez ohľadu na to, koľkokrát si ho videl?",
    "Aký je tvoj najväčší úspech, ktorý si nikdy nikomu neprezradil?",
    "Čo je najvtipnejšia vec, ktorú si videl alebo zažil tento týždeň?",
    "Ak by si sa mohol stať profesionálnym športovcom, v ktorom športe by si sa chcel profesionálne zapojiť?",
    "Aká je tvoja najobľúbenejšia slovná hra alebo hádanka?",
    "Aký je tvoj najväčší nedostatok, ktorý by si rád zmenil?",
    "Podeľ sa o najdivokejšiu výpravu, na ktorú si kedy išiel.",
    "Čo je najväčší omyl, ktorý si kedy urobil?",
    "Ak by si mohol byť ktoroukoľvek historickou postavou, ktorá by to bola a prečo?",
    "Aká je tvoja najväčšia fantázia, ktorú si kedy mal?",
    "Čo je najčudnejšia vec, ktorú si na internete našiel?",
    "Podeľ sa o najzábavnejší vtip, ktorý si kedy počul.",
    "Ktoré zvieratá majú podľa teba najzábavnejšie zvuky?",
    "Ak by si mohol žiť v akejkoľvek ére dejín, v ktorej by si žil a prečo?",
    "Aký je tvoj najlepší spôsob, ako si zlepšiť náladu, keď si smutný?",
    "Ak by si mohol zmeniť jednu vec na svete, čo by to bolo?",
    "Aká je tvoja najhlúpejšia náhoda alebo nešťastná udalosť, ktorá sa ti kedy stala?",
    "Čo je najzvláštnejšie miesto, ktoré si kedy navštívil?",
];
const initialTopics = topics.slice(); // Copy the initial topics array
let hue = Math.floor(Math.random() * 360); // Initialize hue value randomly between 0 and 359

// Bind the displayNextTopic function to the "Next" button
document.getElementById("next-button").addEventListener("click", displayNextTopic);

// Function to display the next topic
function displayNextTopic() {
    if (topics.length > 0) {
        console.log("Remaining topics:", topics); // Log remaining topics
        shuffleTopics(topics); // Shuffle topics array
        const topic = topics.pop();
        const topicElement = document.getElementById("conversation-topic");
        topicElement.textContent = topic;

        // Apply current color based on hue
        topicElement.style.backgroundColor = `hsl(${hue}, 70%, 80%)`;

        // Increment hue for next click
        hue = (hue + 10) % 360; // Increment by 30 degrees for a smooth transition

        document.getElementById("next-button").textContent = "Ďalšia otázka";
        console.log("Displayed topic:", topic); // Log displayed topic
    } else {
        const topicElement = document.getElementById("conversation-topic");
        topicElement.textContent = "Už ste sa porozprávali o všetkom!";
        topicElement.style.backgroundColor = "#fff"; // Change div background color to white
        document.getElementById("next-button").textContent = "Začať znova";
        document.getElementById("next-button").removeEventListener("click", displayNextTopic);
        document.getElementById("next-button").addEventListener("click", startOver);
        console.log("No topics left.");
    }
}

// Function to start over the game
function startOver() {
    console.log("Starting over...");
    topics.length = 0;
    topics.push(...initialTopics); // Revert to initial topics
    document.getElementById("next-button").textContent = "Ďalšia otázka";
    document.getElementById("next-button").removeEventListener("click", startOver);
    document.getElementById("next-button").addEventListener("click", displayNextTopic);
    hue = 0; // Reset hue value
    displayNextTopic(); // Display the first topic
}

// Function to shuffle the topics array
function shuffleTopics(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
