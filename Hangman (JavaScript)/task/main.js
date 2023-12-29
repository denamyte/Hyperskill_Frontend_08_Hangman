const input = require('sync-input')

const words = ["python", "java", "swift", "javascript"];
const index = Math.floor(Math.random() * words.length);
const welcome = () => console.log("H A N G M A N");
const ask = msg => input(msg);
const defineRes = userInp => userInp === words[index];
const showRes = flag => console.log(flag ? "You survived!" : "You lost!");

function main() {
    welcome();
    const userInp = ask("Guess the word: ");
    showRes(defineRes(userInp))
}

main()