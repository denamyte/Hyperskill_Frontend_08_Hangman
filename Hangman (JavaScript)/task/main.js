const input = require('sync-input')

let attemptCount = 8;
const lowRegex = /[a-z]/;
const words = ["python", "java", "swift", "javascript"];
const word = words[Math.floor(Math.random() * words.length)];
const guessedLetters = [];
const welcome = () => console.log("H A N G M A N\n");
const ask = () => input("Input a letter: ");
const getWordMask = () =>
    word.split('')
        .map((letter) =>
            guessedLetters.includes(letter) ? letter : '-')
        .join("");

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

const lost = () => attemptCount <= 0;
const win = () => word
    .split("")
    .every(letter => guessedLetters.includes(letter));
const result = () => lost() && "You lost!" ||
    win() && `You guessed the word ${word}!\nYou survived!` ||
    null;

function main() {
    welcome();
    while (true) {
        console.log(getWordMask());
        checkLetter(ask());
        const res = result();
        if (res) {
            console.log(res);
            break;
        }
        console.log("");
    }
}

main()