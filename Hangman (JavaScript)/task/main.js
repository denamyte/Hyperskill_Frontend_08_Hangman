const input = require('sync-input')

const word = "python";
const welcome = () => console.log("H A N G M A N");
const ask = msg => input(msg);
const defineRes = userInp => userInp === word;
const showRes = flag => console.log(flag ? "You survived!" : "You lost!");

function main() {
    welcome();
    const userInp = ask("Guess the word: ");
    showRes(defineRes(userInp))
}

main()