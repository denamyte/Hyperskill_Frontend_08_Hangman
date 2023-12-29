const input = require('sync-input')

let attemptCount = 8;
const words = ["python", "java", "swift", "javascript"];
const word = words[Math.floor(Math.random() * words.length)];
const knownLetters = [];
const welcome = () => console.log("H A N G M A N\n");
const ask = msg => input(msg);
const getWordMask = () =>
    word.split('')
        .map((letter) =>
            knownLetters.includes(letter) ? letter : '-')
        .join("");

function checkLetter(letter) {
    if (word.includes(letter)) {
        if (!knownLetters.includes(letter))
            knownLetters.push(letter);
        else {
            console.log("No improvements.");
            attemptCount--;
        }
    } else {
        console.log("That letter doesn't appear in the word.");
        attemptCount--;
    }
}

const win = () => word
    .split("")
    .every(letter => knownLetters.includes(letter));
const lost = () => attemptCount <= 0;

function main() {
    welcome();
    while (true) {
        if (lost()) {
            console.log("You lost!");
            break;
        } else if (win()) {
            console.log(word +
                "\nYou guessed the word!" +
                "\nYou survived!");
            break;
        }
        console.log(getWordMask());
        checkLetter(ask("Input a letter: "));
        console.log("");
    }
}

main()