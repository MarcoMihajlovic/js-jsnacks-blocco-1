var peso = 0;

var zucchine = [
    {
        'nome': 'zucchina',
        'tipo':'a',
        'lunghezza': 10,
        'peso': 10
    },
    {
        'nome': 'zucchina',
        'tipo': 'b',
        'lunghezza': 20,
        'peso': 9
    },
    {
        'nome': 'zucchina',
        'tipo': 'c',
        'lunghezza': 11,
        'peso': 8
    },
    {
        'nome': 'zucchina',
        'tipo': 'd',
        'lunghezza': 15,
        'peso': 7
    },
    {
        'nome': 'zucchina',
        'tipo': 'e',
        'lunghezza': 16,
        'peso': 6
    },
    {
        'nome': 'zucchina',
        'tipo': 'f',
        'lunghezza': 32,
        'peso': 5
    },
    {
        'nome': 'zucchina',
        'tipo': 'g',
        'lunghezza': 1,
        'peso': 4
    },
    {
        'nome': 'zucchina',
        'tipo': 'h',
        'lunghezza': 17,
        'peso': 3
    },
    {
        'nome': 'zucchina',
        'tipo': 'i',
        'lunghezza': 90,
        'peso': 2
    },
    {
        'nome': 'zucchina',
        'tipo': 'l',
        'lunghezza': 1,
        'peso': 1
    }
];

//Esercizio 1
/* Crea un array di 10 oggetti che rappresentano una
zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

console.log("Esercizio 1");
console.log("");
console.log("Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.");
console.log("");

for (var i = 0; i < zucchine.length; i++){
    console.log("");
    console.log("Nome: " + zucchine[i].nome);
    console.log("Tipo: " + zucchine[i].tipo);
    console.log("Lunghezza: " + zucchine[i].lunghezza);
    console.log("Peso: " + zucchine[i].peso);
}

for (var i = 0; i < zucchine.length; i++){
    peso += zucchine[i].peso;
}

console.log("");
console.log("Il loro peso totale sarà");
console.log(peso);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Esercizio 2
/* Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano
meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi
di zucchine */

console.log("");
console.log("Esercizio 2");
console.log("");
console.log("Crea 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine");
console.log("");

var zucchinePiccole = [];
var zucchineGrandi = [];
peso = 0;

for (var i = 0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezza < 15) {
        zucchinePiccole.push(zucchine[i]);
    } else if (zucchine[i].lunghezza > 15) {
        zucchineGrandi.push(zucchine[i]);
    }
}
console.log("Le zucchine grandi sono: ")
for (var i = 0; i < zucchineGrandi.length; i++){
    console.log("Nome: " + zucchineGrandi[i].nome);
    console.log("Tipo: " + zucchineGrandi[i].tipo);
    console.log("Lunghezza: " + zucchineGrandi[i].lunghezza);
    console.log("Peso: " + zucchineGrandi[i].peso);
    console.log("");
}

for (var i = 0; i < zucchineGrandi.length; i++) {
    peso += zucchineGrandi[i].peso;
}

console.log("Il loro peso complessivo è: " + peso);

peso = 0;

console.log("");

console.log("Le zucchine piccole sono: ")
for (var i = 0; i < zucchinePiccole.length; i++){
    console.log("Nome: " + zucchinePiccole[i].nome);
    console.log("Tipo: " + zucchinePiccole[i].tipo);
    console.log("Lunghezza: " + zucchinePiccole[i].lunghezza);
    console.log("Peso: " + zucchinePiccole[i].peso);
    console.log("");
}

for (var i = 0; i < zucchinePiccole.length; i++) {
    peso += zucchinePiccole[i].peso;
}

console.log("Il loro peso complessivo è: " + peso);

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Esercizio 3
/* Scrivi una funzione che accetti una stringa come
argomento e la ritorni girata (es. Ciao -> oaiC) */

console.log("");
console.log("Esercizio 3");
console.log("Converti stringa, utilizza la text nell'HTML");
console.log("");

function myFunction() {
    var nome = "";
    document.getElementById("risultato").innerHTML = "";
    var value = document.getElementById("stringa").value;
    
    for (var i = (value.length - 1); i > -1; i--) {
        nome += value.charAt(i);
    }
    console.log(nome);
    document.getElementById("risultato").innerHTML = nome;
    document.getElementById("stringa").value = "";
}

////////////////////////////////////////////////////////////////////////////////////////
//Esercizio 4
/* Generatore di “nomi cognomi” casuali: prendendo una lista
di nomi e una lista di cognomi, Gatsby vuole generare una
falsa lista di 3 invitati. */

console.log("");
console.log("Esercizio 4");
console.log("");
console.log("Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.");
console.log("");

var listaNomiEsercizio4 = ['Marco', 'Lorenzo', 'Giulio', 'Costanzo', 'Ignazio', 'Olmo', 'Paolo'];
var listaCognomiEsercizio4 = ['Mihajlovic', 'Ghesizzi', 'Bitta', 'Nervi', 'Rogi', 'De Marinis', 'Ciaonescu'];
var listaInvitatiEsercizio4 = [];
var controllo = false;

console.log("I nomi sono: ");
console.log(listaNomiEsercizio4);
console.log("");
console.log("I cognomi sono: ");
console.log(listaCognomiEsercizio4);

for (var i = 0; i < 3; i++) {
    nomiCasualiEsercizio4();
}

console.log("Abbiamo tre invitati e sono:")
console.log("");

for (var i = 0; i < listaInvitatiEsercizio4.length; i++) {
    console.log(listaInvitatiEsercizio4[i]);
}

function nomiCasualiEsercizio4() {
    controllo = false;
    while(!controllo) {
        var nomeEsercizio4 = listaNomiEsercizio4[Math.round(Math.random()*6)] + " " + listaCognomiEsercizio4[Math.round(Math.random()*6)];

        if (!listaInvitatiEsercizio4.includes(nomeEsercizio4)) {
            listaInvitatiEsercizio4.push(nomeEsercizio4);
            controllo = true;
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////
//Esercizio 5
/* Crea un array di numeri interi e fai la somma di tutti gli
elementi che sono in posizione dispari */

console.log("");
console.log("Esercizio 5");
console.log("");
console.log("Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari");
console.log("");

var arrayEsercizio5 = [];
var sommaEsercizio5 = 0;

for (var i = 0; i < 10; i++) {
    arrayEsercizio5.push(Math.round(Math.random()*99 +1));
}

sommaDispariEsercizio5();

console.log("La somma degli elementi dispari di " + arrayEsercizio5 + " è uguale a " + sommaEsercizio5);

function sommaDispariEsercizio5() {
    for (var i = 0; i < arrayEsercizio5.length; i++) {
        if (i%2 == 1) {
            sommaEsercizio5 +=  arrayEsercizio5[i];
        }
    }
}

////////////////////////////////////////////////////////////
//Esercizio 6
/* Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */

console.log("");
console.log("Esercizio 6");
console.log("");
console.log("Crea due array che hanno un numero di elementi diversi. Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.");
console.log("");

var array1Esercizio6 = [];
var array2Esercizio6 = [];
var numeroEsercizio6 = 0;
controllo = false;

for (var i = 0; i < Math.round(Math.random()*9 + 1); i++) {
    controllo = false;
    
    while(!controllo){
        
        numero = Math.round(Math.random()*99 + 1);
        
        if(!array1Esercizio6.includes(numero)) {
            array1Esercizio6.push(numero);
            controllo = true;
        }
    }
}

for (var i = 0; i < Math.round(Math.random()*9 + 1); i++) {

    controllo = false;
    
    while(!controllo){
        
        numero = Math.round(Math.random()*99 + 1);
        
        if(!array2Esercizio6.includes(numero)) {
            array2Esercizio6.push(numero);
            controllo = true;
        }
    }
}

console.log("Il primo array ha " + array1Esercizio6);
console.log("");
console.log("Il secondo array ha " + array2Esercizio6);
console.log("");

if (array1Esercizio6.length < array2Esercizio6.length) {
    for (i = array1Esercizio6.length; i < array2Esercizio6.length; i++) {
        controllo = false;
    
        while(!controllo){
            
            numero = Math.round(Math.random()*99 + 1);
            
            if(!array1Esercizio6.includes(numero)) {
                array1Esercizio6.push(numero);
                controllo = true;
            }
        }
    }
    console.log("Gli array ora sono: ");
} else if (array1Esercizio6.length > array2Esercizio6.length) {
    for (i = array2Esercizio6.length; i < array1Esercizio6.length; i++) {
        controllo = false;
    
        while(!controllo){
            
            numero = Math.round(Math.random()*99 + 1);
            
            if(!array2Esercizio6.includes(numero)) {
                array2Esercizio6.push(numero);
                controllo = true;
            }
        }
    }
    console.log("Gli array ora sono: ");
} else {
    console.log("I due Array hanno la stessa lunghezza");
}

console.log("");
console.log(array1Esercizio6);
console.log("");
console.log(array2Esercizio6);

////////////////////////////////////////////////////////////////////////
//Esercizio 7
/* Scrivi una funzione che fonda due array (aventi lo stesso
numero di elementi) prendendo alternativamente gli
elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */

console.log("");
console.log("Esercizio 7");
console.log("");
console.log("Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].");
console.log("");

var array1Esercizio7 = [10, 15, 35];
var array2Esercizio7 = ['b', 'q', 'a'];
var arrayAlternatoEsercizio7 = [];

console.log("Il primo array è: ");
console.log(array1Esercizio7);
console.log("");
console.log("Il secondo array è: ");
console.log(array2Esercizio7);
console.log("");

for (var i = 0; i < array1Esercizio7.length; i++) {
    pushAlternato(i);
}

console.log("Il mio alternato è: ");
console.log(arrayAlternatoEsercizio7);

function pushAlternato(i) {
    arrayAlternatoEsercizio7.push(array1Esercizio7[i]);
    arrayAlternatoEsercizio7.push(array2Esercizio7[i]);
}

//////////////////////////////////////////////////////////////////////////////////////
//Esercizio 8
/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al
massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che
hanno la posizione compresa tra “a” e “b” */

console.log("");
console.log("Esercizio 8");
console.log("");
console.log("Scrivi una funzione che accetti tre argomenti: un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”");
console.log("");

var arrayEsercizio8 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var maxEsercizio8 = Math.floor(Math.random()*9 + 1);
var minEsercizio8 = Math.floor(Math.random()*maxEsercizio8);

console.log("Ho questo array: ");
console.log(arrayEsercizio8);
console.log("");
console.log("Ed ho come indice massimo: " + maxEsercizio8 + " e minimo: " + minEsercizio8);

var arrayRisultatoEsercizio8 = sottoArray(arrayEsercizio8, maxEsercizio8, minEsercizio8);

if (arrayRisultatoEsercizio8.length == 0) {
    console.log("Il sotto array compreso tra " + minEsercizio8 + " e " + maxEsercizio8 + " è un array vuoto");
} else {
    console.log("");
    console.log("Il mio sotto array con indice minimo " + minEsercizio8 + " e indice massimo " + maxEsercizio8 + " sarà:");
    console.log(arrayRisultatoEsercizio8);
}

function sottoArray(array, max, min) {
    var arrayRisultato = [];

    for (var i = min + 1; i < max; i++) {
        arrayRisultato.push(array[i]);
    }
    return arrayRisultato;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////