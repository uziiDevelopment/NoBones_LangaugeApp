// app.js

// Word pool array
let wordPool = [
    { text: "Hola", translation: "Hello", imageURL: "https://cdn.discordapp.com/attachments/1232710031053422705/1288153785188749467/Image.png?ex=66f42633&is=66f2d4b3&hm=0c3df42b21d0467ad2f173f547035c20b3b5f353486c33259f4c7b47798260aa&" },
    { text: "Gracias", translation: "Thank you", imageURL: "https://cdn.discordapp.com/attachments/1232710031053422705/1288153785188749467/Image.png?ex=66f42633&is=66f2d4b3&hm=0c3df42b21d0467ad2f173f547035c20b3b5f353486c33259f4c7b47798260aa&" },
    { text: "Adiós", translation: "Goodbye", imageURL: "https://cdn.discordapp.com/attachments/1232710031053422705/1288153785188749467/Image.png?ex=66f42633&is=66f2d4b3&hm=0c3df42b21d0467ad2f173f547035c20b3b5f353486c33259f4c7b47798260aa&" }
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
