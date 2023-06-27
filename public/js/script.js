//SCRAMBLE TEXT FUNCTIONS
const TEXTS = [
    'Umbral ®',
    'Cyber Security',
    'Digital-First',
    'Design Agency'
];
const scrambler = new window.Scrambler();
let i = 0;
let scramblingTimeout;

function printText() {
    const handleScramble = (text) => {
        document.getElementById('scrambletext').innerHTML = text;
    };

    scrambler.scramble(TEXTS[i % TEXTS.length], handleScramble);
    i++;
    scramblingTimeout = setTimeout(printText, 3500);
}

printText();

const TEXTSTWO = ['Trabajo'];
const scramblerTwo = new window.Scrambler();
let z = 0;
let scramblingTimeoutTwo;

function printTextTwo() {
    const handleScrambleTwo = (text) => {
        document.getElementById('work-scrambler').innerHTML = text;
    };

    scramblerTwo.scramble(TEXTSTWO[z % TEXTSTWO.length], handleScrambleTwo);
    z++;
    scramblingTimeoutTwo = setTimeout(printTextTwo, 50);
}

function startScrambling() {
    printTextTwo(); // Start scrambling when hovering over the word
}

function stopScrambling() {
    clearTimeout(scramblingTimeoutTwo); // Stop scrambling when hovering away from the word
}

const TEXTSTHREE = ['Agencia'];
const scramblerThree = new window.Scrambler();
let x = 0;
let scramblingTimeoutThree;

function printTextThree() {
    const handleScrambleThree = (text) => {
        document.getElementById('agencia-scrambler').innerHTML = text;
    };

    scramblerThree.scramble(TEXTSTHREE[x % TEXTSTHREE.length], handleScrambleThree);
    x++;
    scramblingTimeoutThree = setTimeout(printTextThree, 50);
}

function startScramblingTwo() {
    printTextThree(); // Start scrambling when hovering over the word
}

function stopScramblingTwo() {
    clearTimeout(scramblingTimeoutThree); // Stop scrambling when hovering away from the word
}

const TEXTSFOUR = ['Servicios'];
const scramblerFour = new window.Scrambler();
let p = 0;
let scramblingTimeoutFour;

function printTextFour() {
    const handleScrambleFour = (text) => {
        document.getElementById('servicios-scrambler').innerHTML = text;
    };

    scramblerFour.scramble(TEXTSFOUR[p % TEXTSFOUR.length], handleScrambleFour);
    p++;
    scramblingTimeoutFour = setTimeout(printTextFour, 50);
}

function startScramblingThree() {
    printTextFour(); // Start scrambling when hovering over the word
}

function stopScramblingThree() {
    clearTimeout(scramblingTimeoutFour); // Stop scrambling when hovering away from the word
}

const TEXTSFIVE = ['Clientes'];
const scramblerFive = new window.Scrambler();
let o = 0;
let scramblingTimeoutFive;

function printTextFive() {
    const handleScrambleFive = (text) => {
        document.getElementById('clientes-scrambler').innerHTML = text;
    };

    scramblerFive.scramble(TEXTSFIVE[o % TEXTSFIVE.length], handleScrambleFive);
    o++;
    scramblingTimeoutFive = setTimeout(printTextFive, 50);
}

function startScramblingFour() {
    printTextFive(); // Start scrambling when hovering over the word
}

function stopScramblingFour() {
    clearTimeout(scramblingTimeoutFive); // Stop scrambling when hovering away from the word
}

// Event listeners for hovering
document.getElementById('work-scrambler').addEventListener('mouseover', startScrambling);
document.getElementById('work-scrambler').addEventListener('mouseout', stopScrambling);

document.getElementById('agencia-scrambler').addEventListener('mouseover', startScramblingTwo);
document.getElementById('agencia-scrambler').addEventListener('mouseout', stopScramblingTwo);

document.getElementById('servicios-scrambler').addEventListener('mouseover', startScramblingThree);
document.getElementById('servicios-scrambler').addEventListener('mouseout', stopScramblingThree);

document.getElementById('clientes-scrambler').addEventListener('mouseover', startScramblingFour);
document.getElementById('clientes-scrambler').addEventListener('mouseout', stopScramblingFour);


//ADVICE GENERATOR

const resDiv = document.querySelector('.results');
const resBtn = document.querySelector('#data');
const advNumbDiv = document.querySelector('.advice-number');


resBtn.addEventListener('click', () => {
    getAdvice();
});

window.onload = () => {
    getAdvice();
};



function getAdvice() {

    fetch('	https://api.adviceslip.com/advice').then(response => {
        return response.json();
    }).then(adviceData => {
        const Adviceobj = adviceData.slip;
        resDiv.innerHTML = `<h1><q>${Adviceobj.advice}</h1>`;
        advNumbDiv.innerHTML = `<p>ADVICE # ${Adviceobj.id}</p>`;
    }).catch(error => {
        console.log(error);
    });

}

//SWEET ALERT 
const sweetAlertSuccess = document.getElementById('swallSuccess').addEventListener('click', swallSuccess);

function swallSuccess() {
    swal.fire({
        title: "Exito!",
        text: "Mensaje enviado!",
        icon: "success"
    })
};

//BOOTSTRAP VALIDATOR

(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })
})()

//EXCHANGE RATE JQUERY
$(document).ready(function () {
    $("#calcular-btn").click(function () {
        let presupuesto = $("#presupuesto-input").val();
        if (presupuesto != '') {
            $.ajax({
                url: "https://api.bluelytics.com.ar/v2/latest",
                method: "GET",
            })
                .done(function (data) {
                    let blueDolar = data.blue.value_buy;
                    let totalArs = presupuesto;
                    let totalUsd = totalArs / blueDolar;
                    $("#presupuesto").html("La conversión de : $" + totalArs + " pesos a dólares al cambio del dia es u$s " + totalUsd);

                });
        } else {
            return
        }
    });
});


//CARDS

class WorksCards {
    constructor(image, href) {
        this.imageSrc = image,
            this.href = href
    };
};

const cardsHolder = document.querySelector('#cardsHolder');

const workCardOne = new WorksCards('portfolio-tambotrading.webp', '#');
const workCardTwo = new WorksCards('portfolio-ewe.webp', '#');
const workCardThree = new WorksCards('ut-siei.webp', '#');

const cards = [workCardOne, workCardTwo, workCardThree]
function createWorkCard(createCard) {
    for (e of createCard) {
        let card = document.createElement("div")
        card.classList.add('col-md-4')
        card.classList.add('mt-2')
        card.innerHTML = `<a href="${e.href}"><img src="./images/${e.imageSrc}" alt=""></a>`
        cardsHolder.append(card)
    }
}

//PRESUPUESTO
let currentStep = 1;
const steps = document.getElementsByClassName('step');

function showStep(step) {
    for (let i = 0; i < steps.length; i++) {
        steps[i].style.display = 'none';
    }
    document.getElementById(`step${step}`).style.display = 'block';
}

function nextStep() {
    if (currentStep < steps.length) {
        currentStep++;
        showStep(currentStep);
    }
}

function saveBudget() {
    // Obtener los valores 
    const type = document.querySelector('input[name="type"]:checked').value;
    const features = [];
    const featureCheckboxes = document.querySelectorAll('input[name="features"]:checked');
    featureCheckboxes.forEach(function (checkbox) {
        features.push(checkbox.value);
    });
    const pages = parseInt(document.querySelector('input[name="pages"]').value);
    const days = parseInt(document.querySelector('input[name="days"]').value);

    // Crear un objeto 
    const budget = {
        type: type,
        features: features,
        pages: pages,
        days: days
    };

    // Obtener los presupuestos anteriores l
    let previousBudgets = localStorage.getItem('previousBudgets');
    if (!previousBudgets) {
        previousBudgets = [];
    } else {
        previousBudgets = JSON.parse(previousBudgets);
    }

    // Agregar el nuevo presupuesto a los anteriores
    previousBudgets.push(budget);

    // Guardar los presupuestos 
    localStorage.setItem('previousBudgets', JSON.stringify(previousBudgets));

    // Mostrar los presupuestos anteriores
    loadPreviousBudgets();
    showStep(1);
}

function loadPreviousBudgets() {
    // Obtener los presupuestos anteriores 
    const previousBudgets = localStorage.getItem('previousBudgets');
    if (previousBudgets) {
        const budgetList = document.getElementById('budgetList');
        budgetList.innerHTML = '';

        // Mostrar cada presupuesto anterior en una lista
        JSON.parse(previousBudgets).forEach(function (budget) {
            const listItem = document.createElement('li');
            listItem.textContent = `Tipo de sitio web: ${budget.type}, Cantidad de páginas: ${budget.pages}, Precio total: $${calculateTotalPrice(budget)}`;
            budgetList.appendChild(listItem);
        });
    }
}

function calculateTotalPrice(budget) {
    // Calcular el precio total del presupuesto 
    const basePrice = 50000;
    const additionalFeaturesPrice = budget.features.length * 20000;
    const pagesPrice = budget.pages * 10000;

    return basePrice + additionalFeaturesPrice + pagesPrice;
}
loadPreviousBudgets();
showStep(1);
createWorkCard(cards);
AOS.init();


