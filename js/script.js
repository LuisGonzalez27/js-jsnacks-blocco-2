"use strict";
// SNACK 1
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

const bottone = document.getElementById('btn');
bottone.addEventListener('click',
function(){
    let numeroInserito = document.getElementById('numeroInserito').value;

    if(numeroInserito % 2 == 0) {
        document.getElementById('risultato').innerHTML = numeroInserito + " è pari";
    }
    else{
        numeroInserito++;
        document.getElementById('risultato').innerHTML = numeroInserito + " è il numero successivo";
    }
    document.getElementById('numeroInserito').value = '';
}
);

// // SNACK 2
// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di 
// cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

const arrayNomi = ['Luis', 'Miguel', 'Kin', 'Silvia', 'Antonio', 'Giulia'];
const arrayCognomi = ['Gonzalez', 'Castellanos', 'Panaia', 'Furia', 'Garzia'];
const listaFalsa = document.getElementById('lista');

const generate = function (){
    document.querySelector('ul').innerHTML = '';
    for(let i = 0; i < 5; i++){
    let invitati = document.createElement('li');
    let nomeInvitati = arrayNomi[Math.floor(Math.random() * (arrayNomi.length))] + ' ' + arrayCognomi[Math.floor(Math.random() * (arrayCognomi.length))];
    invitati.append(nomeInvitati);
    document.querySelector('ul').append(invitati)
    }
}
listaFalsa.addEventListener('click', generate);