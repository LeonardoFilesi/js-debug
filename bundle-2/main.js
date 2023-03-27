/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}
// La funzione scrive tutti i numeri[i] partendo da 0 fino a 5 (non compreso)
// teoricamente. In pratica è scritta male e non ha senso logico

// Errore di logica:
// i > 5, dovrebbe essere i < 5 

 // ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}
// La funzione stabilisce che se e solo se un numero, diviso 2, da resto 0
// di ritorno vedremo quel numero, sommato 5

// Errore di sintassi:
// per scrivere correttamente la logica di questa funzione, bisognerebbe 
// scrivere: (num % 2 === 0)

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}
// La funzione scrive tutti i numeri[i] partendo da 0 fino a 5
// (non compreso)

// Errore di sintassi:
// nello stabilire i valori di [i], bisogna usare ";" come separatore 
// e non la ","


// ESERCIZIO 4 (suggerimento: ci sono 8 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // [2,4,6,8]
// la funzione stabilisce quali numeri da dentro l'array di numeri, se divisi
// per 2 danno resto 0, e li pusha dentro un nuovo array vuoto

// Errori:
// > L'array numbers è un let, ma dovrebbe essere un const
// > L'array evenNumbers è un let, ma dovrebbe essere un const
// > Al termine della definizione di [i], non ci dovrebbe essere ";" dopo i++
// > Definendo if, bisogna ancora specificare cosa sia definibile per 2
// quindi numbers[i]
// > Definendo if, per definire cosa è divisibile per 2, il numero deve dare
// resto 0, quindi va scritto "numbers[i] % 2 === 0"
// > Si starebbero pushando le posizioni [i] divisibili per 2, non 
// i valori di "numbers" divisibili per 2, quindi invece di "push[i]"
// andrebbe scritto "evenNumbers.push(numbers[i])"
// >