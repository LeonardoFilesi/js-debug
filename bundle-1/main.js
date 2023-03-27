/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();
// La funzione non fa nulla di particolare, dichiara un'età (const) e stabilisce
// che se l'età ha un valore sotto 18, compare un messaggio
// o altrimenti, compare un altro messaggio
// essendo l'età una const, il risultato della funzione è praticamente
// prestabilito, quindi inutile

// Errore di sintassi:
// il "message", non può essere una const, ma necessariamente un let
// siccome non è definito


 // ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();
// La funzione non fa nulla di particolare con l'array "colors", si limita a
// confermarne il numero dei suoi elementi con un .log

// Errore di sintassi:
// indicare quanti elementi ci sono nell'array "colors" con "colors.lenght"
// non viene letto
// LENGTH si è stato scritto male



// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();
// la funzione chiede all'utente di inserire un valore numerico e lo somma
// ad un valore prestabilito

// Errore di sintassi:
// bisognerebbe aggiungere una variabile 
// "let insertedNumber = parseInt(userNumber)"
// ed usare questa nuova variabile nel calcolo di "total"

// ESERCIZIO 4
function checkAccess() {
    const addresses = [
        'mymail@mail.com',
        'yourmail@mail.com',
        'hermail@mail.com',
        'hismail@mail.com',
    ];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

// la funzione mette in paragone l'email richiesta ed inserirta dall'utente
// con quelle di un array prestabilito

