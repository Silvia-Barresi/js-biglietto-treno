// ll programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 € al km),
// ma va applicato uno sconto del 20% per i minorenni
// e del 40% per gli over 65.


// chiedere il numero di chilometri

var quantiKm = parseInt(prompt("Quanti chilometri vuoi percorrere?"));

// chiedere l'età del passeggero

var quantiAnni = parseInt(prompt("Quanti anni hai?"));

//calcolare il prezzo del biglietto
// il prezzo del biglietto:0.21 euro al chilometro

var prezzoBiglietto = 0.21 * quantiKm;
console.log("prezzo intero:" + prezzoBiglietto);


// 20% di sconto se minorenni

var scontoMinorenni = 20;

var percentualeMinorenni = ((scontoMinorenni * prezzoBiglietto) /100);

console.log("Sconto minori:" + percentualeMinorenni);

// prezzo da pagare perMinorenni

var totaleMinorenni = prezzoBiglietto - percentualeMinorenni;

console.log("Totale per minori:" + totaleMinorenni);


// 40% di sconto se over 65

var overSessantacinque = 40;

var percentualeOver = ((overSessantacinque * prezzoBiglietto) /100);

console.log("Sconto over 65:" + percentualeOver);


// prezzo da pagare over 65

var totaleOver = prezzoBiglietto - percentualeOver;

console.log("Totale per over:" + totaleOver);

// condizione

if (quantiAnni <18){
  msg= "Il prezzo del biglietto è:" + totaleMinorenni;
} else if (quantiAnni >65){
  msg= "Il prezzo del biglietto è:" + totaleOver;
} else if (quantiAnni >=18 || quantiAnni <=65){
  msg= "Il prezzo del biglietto è: " + prezzoBiglietto;
}

// output

document.getElementById('prezzo').innerHTML = msg;
