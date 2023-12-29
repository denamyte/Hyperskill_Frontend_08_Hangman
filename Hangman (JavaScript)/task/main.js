const input = require('sync-input')

const words = ["python", "java", "swift", "javascript"];
const word = words[Math.floor(Math.random() * words.length)];
const knownLetters = [];
const welcome = () => console.log("H A N G M A N\n");
const thanks = () => console.log("Thanks for playing!");
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
        console.log(knownLetters);
    } else {
        console.log("That letter doesn't appear in the word.");
    }
}

function main() {
    let attemptCount = 8;
    welcome();
    while (attemptCount-- > 0) {
        console.log(getWordMask())
        checkLetter(ask("Input a letter: "));
        console.log("");
    }
    thanks();
}

main()