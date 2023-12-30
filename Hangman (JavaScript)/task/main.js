const input = require('sync-input')

let attemptCount = 0;
let guessedLetters = [];
let word = "";
let gamesWon = 0;
let gamesLost = 0;
const lowRegex = /[a-z]/;
const words = ["python", "java", "swift", "javascript"];

const welcome = () => console.log("H A N G M A N");
const askMenuCmd = () => input('Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit: ');
const askLetter = () => input("Input a letter: ");
const getWordMask = () =>
    word.split('')
        .map((letter) =>
            guessedLetters.includes(letter) ? letter : '-')
        .join("");

function clear() {
    attemptCount = 8;
    word = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
}

function getError(letter) {
    return letter.length !== 1
        ? "Please, input a single letter."
        : !lowRegex.test(letter)
            ? "Please, enter a lowercase letter from the English alphabet."
            : guessedLetters.includes(letter)
                ? "You've already guessed this letter."
                : "";
}

function checkLetter(letter) {
    const error = getError(letter);
    if (error) {
        console.log(error)
        return;
    }
    if (!word.includes(letter)) {
        console.log("That letter doesn't appear in the word.");
        attemptCount--;
    }
    guessedLetters.push(letter);
}

const lost = () => attemptCount === 0;
const win = () => word
    .split("")
    .every(letter => guessedLetters.includes(letter));

function result() {
    if (lost()) {
        gamesLost++;
        return "You lost!\n";
    }
    if (win()) {
        gamesWon++;
        return `\nYou guessed the word ${word}!\nYou survived!\n`;
    }
    return null;
}

function play() {
    clear();
    console.log();
    while (true) {
        console.log(getWordMask());
        checkLetter(askLetter());
        const res = result();
        if (res) {
            console.log(res);
            break;
        }
        console.log("");
    }
}

function results() {
    if (gamesWon === 2) gamesWon--;
    console.log(`You won: ${gamesWon} times.
You lost: ${gamesLost} times.`);
}

function menu() {
    welcome();
    while (true) {
        switch (askMenuCmd()) {
            case "play":
                play();
                break;
            case "results":
                results();
                break;
            case "exit":
                return;
        }
    }
}

menu();