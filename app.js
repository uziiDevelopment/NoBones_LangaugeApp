// app.js

// Word pool array
let wordPool = [
    { text: "Hola", translation: "Hello", imageURL: "https://example.com/hola.jpg" },
    { text: "Gracias", translation: "Thank you", imageURL: "https://example.com/gracias.jpg" },
    { text: "Adiós", translation: "Goodbye", imageURL: "https://example.com/adios.jpg" }
];

let currentWordIndex = 0;
let testWordInput = "";

// Display the word of the day
function displayWordOfTheDay() {
    const wordElement = document.getElementById("word");
    const translationElement = document.getElementById("translation");
    const imageElement = document.getElementById("image");

    let currentWord = wordPool[currentWordIndex];
    wordElement.innerText = currentWord.text;
    translationElement.innerText = currentWord.translation;
    imageElement.src = currentWord.imageURL;
}

// Refresh the word by moving to the next word
function refreshWord() {
    currentWordIndex = (currentWordIndex + 1) % wordPool.length;
    displayWordOfTheDay();
}

// Handle daily test
function testWord() {
    const testContainer = document.getElementById("test-container");
    testContainer.style.display = "block";
}

function submitTest() {
    const input = document.getElementById("test-input").value;
    const resultElement = document.getElementById("test-result");

    if (input.toLowerCase() === wordPool[currentWordIndex].text.toLowerCase()) {
        resultElement.innerText = "Correct!";
    } else {
        resultElement.innerText = "Try again!";
    }
}

// Weekly test (dummy for now)
function weeklyTest() {
    alert("Weekly test started!");
    // Logic for weekly test can be added here
}

// Initialize app
window.onload = () => {
    displayWordOfTheDay();
};
