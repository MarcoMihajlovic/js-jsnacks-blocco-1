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

/* for (var i = 0; i < zucchine.length; i++){
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
console.log(peso); */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Esercizio 2
/* Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano
meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi
di zucchine */

/* var zucchinePiccole = [];
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

console.log("Il loro peso complessivo è: " + peso); */

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Esercizio 3
/* Scrivi una funzione che accetti una stringa come
argomento e la ritorni girata (es. Ciao -> oaiC) */

/* function myFunction() {
    var nome = "";
    document.getElementById("risultato").innerHTML = "";
    var value = document.getElementById("stringa").value;
    
    for (var i = (value.length - 1); i > -1; i--) {
        nome += value.charAt(i);
    }
    console.log(nome);
    document.getElementById("risultato").innerHTML = nome;
    document.getElementById("stringa").value = "";
} */