"use scrict"

// GRIGLIA CAMPOMINATO
// -----------------------------------------------------------------------------
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con “facile”=> 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con “medio” => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con “difficile” => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

// Dichiarazione variabile, recuperando ID dall'HTML
let diffSelect = document.getElementById("difficulty");

// BUTTON addEventListener
document.getElementById("button").addEventListener("click", printGrid);

// FUNZIONE CHE STAMPA LA GRIGLIA
function printGrid() {
    
    //CONDIZIONE CHE STAMPA LA GRIGLIA FACILE
    if (diffSelect.options[diffSelect.selectedIndex].value === "1") {
        // Column number
        let colNumber = 100;
        
        // Row number
        let colRow = Math.sqrt(colNumber);

        let app = document.getElementById("app");
        app.classList.add("class"); 
        app.classList.add("container"); 
        app.classList.add("h-100"); 
        app.classList.add("d-flex"); 
        app.classList.add("justify-content-center"); 
        app.classList.add("align-items-center"); 
        app.classList.add("align-content-center");

        app.innerHTML = "";

        let row = document.createElement("div");
        row.classList.add("class")
        row.classList.add("row"); 
        row.classList.add("justify-content-center"); 
        row.classList.add("align-content-center");

        // Invocazione proprietà
        let cols = creaColonne(colNumber, "size-easy");
        row.innerHTML = square;
        app.append(row);
    }

    //CONDIZIONE CHE STAMPA LA GRIGLIA MEDIA
    else if (diffSelect.options[diffSelect.selectedIndex].value === "2") {
    // Column number
    let colNumber = 81;

    // Row number
    let colRow = Math.sqrt(colNumber) +1;

    let app = document.getElementById("app");
    app.classList.add("class"); 
    app.classList.add("container"); 
    app.classList.add("h-100"); 
    app.classList.add("d-flex"); 
    app.classList.add("justify-content-center"); 
    app.classList.add("align-items-center"); 
    app.classList.add("align-content-center");

    app.innerHTML = "";

    let row = document.createElement("div");
    row.classList.add("class")
    row.classList.add("row"); 
    row.classList.add("justify-content-center"); 
    row.classList.add("align-content-center");

    // Invocazione proprietà
    let cols = creaColonne(colNumber, "size-medium");
    row.innerHTML = square;
    app.append(row);
    }

    else if (diffSelect.options[diffSelect.selectedIndex].value === "3") {
        // Column number
        let colNumber = 49;

        // Row number
        let colRow = Math.sqrt(colNumber);
    
        let app = document.getElementById("app");
        app.classList.add("class"); 
        app.classList.add("container"); 
        app.classList.add("h-100"); 
        app.classList.add("d-flex"); 
        app.classList.add("justify-content-center"); 
        app.classList.add("align-items-center"); 
        app.classList.add("align-content-center");
    
        app.innerHTML = "";
    
        let row = document.createElement("div");
        row.classList.add("class")
        row.classList.add("row"); 
        row.classList.add("justify-content-center"); 
        row.classList.add("align-content-center");
        
        // Invocazione proprietà
        let cols = creaColonne(colNumber, "size-hard");
        row.innerHTML = square;
        app.append(row);
        }
}



// FUNZIONE CHE CREA LE COLONNE
function creaColonne(numerocolonne, dimensione) {
    let square = "";
    let numeriusati = [];
    let index = 1;
    while (numeriusati.length < numerocolonne) {
        let numeroCella = index;
        if (!numeriusati.includes(numeroCella)) {
        numeriusati.push(numeroCella);
        square += `<div id="${numeroCella}" onclick="myFunction(${numeroCella})" class="box ${dimensione} black-border text-center">${numeroCella}</div>`;
        }
        index++;
    }
    return square;
}

// FUNZIONE CHE CAMBIA BACKGROUND AL CLICK
function myFunction(casella) {
    console.log(casella);
    document.getElementById(casella).classList.toggle("bg-blue");
    }