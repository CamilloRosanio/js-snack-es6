
/**********************************************************
| # CONSEGNA
**********************************************************/

/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

Snack 2
Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/


/**********************************************************
| # INTRO OGGETTI
**********************************************************/

/* Sintassi per dichiarare un oggetto, proprio come un Array ma con le graffe {*} al posto delle parentesi quadre [*]. 
Al posto dell'INDEX degli Array, ho le KEY (chiavi) che sono i nomi propri delle proprietà del mio oggetto.*/


const bicchiere = {
    material: 'Glass',
    color: 'rgba(255, 255, 255, .2)',
    
    /* Questo è un oggetto dentro l'oggetto che a sua volta ha delle proprietà, e questa è la sua sintassi. 
    A differenza dell'oggetto che lo contiene, questo si dichiara coi due punti ":" invece dell'uguale "=" prima delle parentesi graffe*/
    capacity : {
        value: 50,
        residual: 20,
        unit: 'cl',

        // Le proprietà possono contenere un METODO, cioè una funzione richiamabile che si dichiara come segue.
        // In questo caso la funzione è ARROW, quindi potrebbe funzionare male il THIS (spiegato dopo). Per cui meglio ricordarsene.
        getOutput: () => {
            return 'Output'
        },

        // La funzione CLASSICA si può scrivere (e si trova di solito) scritta così: 'functionWithThis() {*}' senza i due punti e la scritta
        functionWithThis: function () {
            // Questo THIS fa riferimento alla capacity
            return this.value
        }
    },

    // Anche l'oggetto può contenere una funzione usata come METODO.
    // Questa è una funzione CLASSICA che può sfruttare l'elemento THIS avendo uno SCOPE "chiuso" al contrario delle funzioni ARROW.
    // Vedi note di seguito per l'utilizzo pratico del THIS
    getOtherOutput: function () {
        // Questi THIS fanno riferimento al bicchiere
        return `Variabile1: ${this.material}, Variabile2: ${this.capacity.value}, Variabile prodotto (value - residual): ${this.capacity.value - this.capacity.residual}`
    },
}


// OBJECT CONST/LET
// Un oggetto di può anche dichiarare come una CONST

const thisIsMyObject = {
    peso: 10,
    nome: 'abcdefg',
}

// La stampa dell'oggetto mi rende tutte le sue proprietà in ordine ALFABETICO, a differenza dell'Array che invece si basa sulla posizione degli elementi
console.log('Stampare il mio OGGETTO (vedi sotto)');
console.log(bicchiere);

/* NOTA BENE: le proprietà degli oggetti hanno uno scope SOLO all'interno degli oggetti che li contengono,
quindi per esempio posso avere diversi oggetti con proprietà che si chiamano allo stesso modo */

/* Per richiamare una properietà dell'oggetto scrivo il suo nome (della const) e poi il punto e il NOME della proprietà. Senza nome, non accedo a nulla al suo interno a parte alcuni casi.
In questo esempio stampo una proprietà.*/
console.log('Stampare una proprietà: ' + bicchiere.material);

// Riassegnare un valore a una proprietà
bicchiere.material = 'Porcelain';
console.log('Riassegnare valore alla proprietà: ' + bicchiere.material);

// Stampare la proprietà di un oggetto contenuto nel mio oggetto
console.log('Stampare la proprietà del sotto-oggetto (capacity): ' + bicchiere.capacity.value);

// Cancellare (UNSET) una proprietà o l'oggetto stesso. In questo esempio rimuovo il "color"
delete bicchiere.color;
console.log('Provo a stampare "color" dopo la cancellazione e infatti ottengo: ' + bicchiere.color);

/* Richiamo il METODO di una delle mie proprietà. In questo modo il METODO o funzione può avere un RETURN che può essere portato
fuori dal mio oggetto e riutilizzato assegnandolo a una vaiabile. */
const myOutput = bicchiere.capacity.getOutput();
const myOtherOutput = bicchiere.getOtherOutput();
console.log('La mia funzione in esterno: ' + myOutput);
console.log('La mia altra funzione in esterno: ' + myOtherOutput);


// COME SFRUTTARE L'ELEMENTO " this. "
/* Per come sono scritte ora le funzioni e gli output, se dovessi cambiare nome del mio Oggetto o di una Proprietà, alcune stampe e Output non funzionerebbero più.
Ecco che entra in gioco " this. " per richiamare le Chiavi (proprietà) o altri elementi dentro l'oggetto.
-----> Come funziona:
Il THIS è una variabile che prende un valore un base al contensto, e indica l'elemento PADRE.
VEDI la funzione 'getOtherOutput()' dove il THIS si riferisce all'elemento PADRE (oggetto = bicchiere). Se cambiassi il nome, la funzione lavorerebbe normalmente comunque. */


/**********************************************************
| # SPIEGAZIONE FOR
**********************************************************/

// ARRAY: Metodo rapido per scorrere un Array con FOR OF
const myArray = [1, 4, 6, 22, 68, 99];

for (const currentItem of myArray) {
    console.log(currentItem);
}

// OBJECT: Metodo rapido per scorrere un Array con FOR IN
const anotherObject = {
    key1: 'abc',
    key2: 55,
    key3: 'def',
}

// Questo stampa i nomi delle proprietà ma NON i valori
for (const currentKey in anotherObject) {
    console.log(currentKey);
}

// Questo stampa i valori delle proprietà
for (const currentKey in anotherObject) {
    const currentValue = anotherObject[currentKey]
    console.log(currentValue);
}

// DETRUTTURAZIONE
// Questo estrae solo le proprietà che desidero e NON TUTTE, e le rende disponibili al di FUORI dell'oggetto, dichiarandole come constanti in una sola dichiarazione
const {key1, key3} = anotherObject;
console.log(key1, key3);

/* Questo non si può fare, perchè non posso portare all'esterno variabili con lo stesso nome, ma hanno ragione d'essere solo all'interno dell'oggetto.
Altrimenti in alternativa porto fuori o le une, o le altre.
const {key1, key3} = anotherObject;
const {key1, key3} = anotherObject; 

Se ho tanti oggetti UGUALI, li contengo in un ARRAY, dove possono coesistere elementi identici differenziati solo e unicamente dall'INDEX dell'Array.
*/





/* ESEMPIO DELLA PALLA*/

// Capita molto spesso che ci siano variabili esterne con lo stesso nome delle proprietà di un oggetto.
// In questo caso è concesso, per via dei diversi SCOPE, che non le sovrappongono, anzi posso assegnarle come valore delle proprietà.

const marca = 'Supersantos';
const colore = 'Arancione';

const palla = {
    marca: marca,
    colore: colore,
};

/* Visto che i nomi sono identici si può COMPATTARE la sintassi come segue.
In questo caso la proprietà viene riempita con il valore della costante esterna con LO STESSO NOME. */

const altraPalla = {marca, colore};

// Ecco una lista (Array) di oggetti assolutamente identici:

const palle = [
    {marca, colore},
    {marca, colore},
    {marca, colore},
    {marca, colore},
]



/**********************************************************
| # SVOLGIMENTO - Snack 1
**********************************************************/



