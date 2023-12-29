const input = require('sync-input')

const words = ["python", "java", "swift", "javascript"];
const word = words[Math.floor(Math.random() * words.length)];
const knownIndices = [0, 1, 2];
const welcome = () => console.log("H A N G M A N");
const ask = msg => input(msg);
const getWordMask = () =>
    word.split('')
        .map((letter, i) =>
            i in knownIndices ? letter : '-')
        .join("");
const defineRes = userInp => userInp === word;
const showRes = flag => console.log(flag ? "You survived!" : "You lost!");

function main() {
    welcome();
    const mask = getWordMask();
    const userInp = ask(`Guess the word ${mask}: `);
    showRes(defineRes(userInp))
}

main()