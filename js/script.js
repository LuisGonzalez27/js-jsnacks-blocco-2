"use strict";
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
