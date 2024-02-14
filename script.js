<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Color Transition</title>
<style>
    body {
        transition: background-color 2s ease; /* Transition effect for background-color */
    }
</style>
</head>
<body>
<div id="topic"></div>
<button id="nextButton">Next Topic</button>

<script>
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
    document.body.style.backgroundColor = randomColor; // Apply the color directly
    setTimeout(() => {
        document.body.style.backgroundColor = ''; // Remove the color after a short delay
    }, 100); // Adjust the delay as needed
}

updateTopic();
</script>
</body>
</html>
    
