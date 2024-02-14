const topics = [
    "Favorite Travel Destinations",
    "Dream Jobs",
    "Favorite Books/Movies/TV Shows",
    "Hobbies and Interests",
    "Memorable Childhood Memories",
    "Bucket List Items",
    "Pets",
    "Food and Cuisine",
    "Personal Goals",
    "Funny or Embarrassing Stories"
];

let currentTopicIndex = 0;

const topicElement = document.getElementById('topic');
const nextButton = document.getElementById('nextButton');

nextButton.addEventListener('click', () => {
    currentTopicIndex = (currentTopicIndex + 1) % topics.length;
    updateTopic();
});

function updateTopic() {
    const currentTopic = topics[currentTopicIndex];
    topicElement.textContent = currentTopic;
    updateBackgroundColor();
}

function updateBackgroundColor() {
    const colors = ['#007bff', '#28a745', '#dc3545', '#ffc107', '#17a2b8'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

updateTopic();
