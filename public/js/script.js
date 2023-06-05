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
const scramblerThree = new window.Scrambler();
const scramblerFour = new window.Scrambler();
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
printText();

const TEXTSTWO = [
    'Trabajo'
];
const handleScrambleTwo = (text) => {
    document.getElementById('work-scrambler').innerHTML = text;
};
let z = 0;
let scramblingTimeoutTwo;
function printTextTwo() {
    scramblerTwo.scramble(TEXTSTWO[z % TEXTSTWO.length], handleScrambleTwo);
    z++;
    scramblingTimeoutTwo = setTimeout(printTextTwo, 3500);
};

function startScrambling() {
    printTextTwo(); // Start scrambling when hovering over the word
};
function stopScrambling() {
    clearTimeout(scramblingTimeoutTwo); // Stop scrambling when hovering away from the word
};

const TEXTSTHREE = [
    'Agencia'
];
const handleScrambleThree = (text) => {
    document.getElementById('agencia-scrambler').innerHTML = text;
};
let x = 0;
let scramblingTimeoutThree;
function printTextThree() {
    scramblerThree.scramble(TEXTSTHREE[x % TEXTSTHREE.length], handleScrambleThree);
    x++;
    scramblingTimeoutThree = setTimeout(printTextThree, 3500);
};
function startScramblingTwo() {
    printTextThree(); // Start scrambling when hovering over the word
};
function stopScramblingTwo() {
    clearTimeout(scramblingTimeoutThree); // Stop scrambling when hovering away from the word
};
const TEXTSFOUR = [
    'Servicios'
];
const handleScrambleFour = (text) => {
    document.getElementById('servicios-scrambler').innerHTML = text;
};
let p = 0;
let scramblingTimeoutFour;
function printTextFour() {
    scramblerThree.scramble(TEXTSFOUR[p % TEXTSFOUR.length], handleScrambleFour);
    p++;
    scramblingTimeoutFour = setTimeout(printTextFour, 3500);
};
function startScramblingThree() {
    printTextFour(); // Start scrambling when hovering over the word
};
function stopScramblingThree() {
    clearTimeout(scramblingTimeoutFour); // Stop scrambling when hovering away from the word
};
const TEXTSFIVE = [
    'Clientes'
];
const handleScrambleFive = (text) => {
    document.getElementById('clientes-scrambler').innerHTML = text;
};
let o = 0;
let scramblingTimeoutFive;
function printTextFive() {
    scramblerThree.scramble(TEXTSFIVE[o % TEXTSFIVE.length], handleScrambleFive);
    o++;
    scramblingTimeoutFive = setTimeout(printTextFive, 3500);
};
function startScramblingFour() {
    printTextFive(); // Start scrambling when hovering over the word
};
function stopScramblingFour() {
    clearTimeout(scramblingTimeoutFive); // Stop scrambling when hovering away from the word
};
AOS.init();


