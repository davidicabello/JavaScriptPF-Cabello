// const scramble = require('@ignatiusmb/scramble')
// scramble(document.querySelector('#yourElement')).run() // single element

const TEXTS = [
    'Umbral ®',
    'Cyber Security',
    'Digital-First',
    'Design Agency'

];
const scrambler = new window.Scrambler();
const scramblerTwo = new window.Scrambler();
const handleScramble = (text) => {
    document.getElementById('scrambletext').innerHTML = text;
};
let i = 0;
let scramblingTimeout;
function printText() {
    scrambler.scramble(TEXTS[i % TEXTS.length], handleScramble);
    i++;
    scramblingTimeout = setTimeout(printText, 3500);
};
function startScrambling() {
    printText(); // Start scrambling when hovering over the word
};
function stopScrambling() {
    clearTimeout(scramblingTimeout); // Stop scrambling when hovering away from the word
};


