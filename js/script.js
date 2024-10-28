
/**********************************************************
| # SNACK 1
**********************************************************/

/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

console.log('SNACK 1');

const myArray = [

    {
        nome: 'biciletta1',
        peso: 10,

        getPeso: function () {
            return this.peso
        }
    },

    {
        nome: 'biciletta2',
        peso: 5,
        
        getPeso: function () {
            return this.peso
        }
    },

    {
        nome: 'biciletta3',
        peso: 19,

        getPeso: function () {
            return this.peso
        }
    },

    {
        nome: 'biciletta4',
        peso: 2,

        getPeso: function () {
            return this.peso
        }
    },
];

// Stampa diretta
// console.log('Stampa diretta del peso della bicicletta più leggera: ' + myArray[1].peso);


// Scrivo una funzione per stampare il peso minore

findMinWeight = (array) => {
    // Dichiaro un Array dove pusherò i vari pesi e una variabile a cui assegnerò l'Index dell'object interessato.
    let functionArray = array;
    let pesoArray =[];

    let interestedIndex;

    // FOR EACH elemento (object in questo caso) nell'array, pusho il valore di "peso" nel nuovo Array
    array.forEach((item) => {
        pesoArray.push(item.peso);
    })

    // Ottengo il valore minimo tramite Math sul nuovo Array
    const pesoMin = Math.min.apply(Math, pesoArray);

    // CONSOLE LOG DI CONTROLLO
    // console.log(pesoArray);
    // console.log('Peso minore: ' + pesoMin);

    // FOR EACH elemento nell'array
    array.forEach((item) => {
        
        // SE il value della property "peso" coincide con il minimo individuato
        if (item.peso == pesoMin) {

            // Salvo l'Index di quell'item in una variabile
            interestedIndex = functionArray.indexOf(item);
        }
    })

    // Il risultato della funzione sarà l'Index dell'Item interessato
    return interestedIndex;
}

// Richiamo la funzione
const interestedItem = findMinWeight(myArray);
console.log('La bicicletta che pesa di meno è: ');
console.log(myArray[interestedItem]);









/**********************************************************
| # SNACK 2
**********************************************************/

/*
Snack 2
Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

console.log('SNACK 2');

// Dichiaro il io Array di Objects
const superSquadre = [
    {
        nome: 'Rotula Boys',
        punti_fatti: 0,
        falli_subiti: 0,
    },

    {
        nome: 'Los Gringos',
        punti_fatti: 0,
        falli_subiti: 0,
    },

    {
        nome: 'Pinuccio Club',
        punti_fatti: 0,
        falli_subiti: 0,
    },
]


// Impostazione dei nuovi valori
superSquadre.forEach(( Team ) => {
    let randomScore = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
    let randomPenalty = Math.floor(Math.random() * (15 - 0 + 1)) + 0;

    // In questo caso scrivo la sintassi come "object.property =" senza il nome dell'Array davanti perchè sto già parlando di oggetti al suo interno.
    Team.punti_fatti = randomScore;
    Team.falli_subiti = randomPenalty;
})

console.log('Squadre con punteggi originali:');
console.log(superSquadre);

// Creazione di un Array "derivato" con gli stessi objects ma proprietà parziali tramite MAP
let superSquadre_partial = superSquadre.map(({nome, falli_subiti}) => ({nome, falli_subiti}));

console.log('Array derivato con solo Nome e Falli Subiti:');
console.log(superSquadre_partial);








/**********************************************************
| # SNACK 3
**********************************************************/

/*
Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/

// Per posizione compresa tra i due numeri (discutendone in aula) è stato stabilito che si parli dei numeri tra A e B.
// Esempio se A=1 e B=3 il valore "contenuto" (compreso) è 3.

console.log('SNACK 3');


// Dichiaro quanto richiesto:
const numbersBetween = [];
const numberA = 9;
const numberB = 27;

// Dichiaro la funzione
middleValues = (min, max, array) => {
    let increasingNumber = min + 1;

    for (let i = 0; i < (max - min - 1); i++) {
        array.push(increasingNumber);

        increasingNumber += 1;
    }

    return array;
}

// Richiamo la funzione con i parametri dati all'inizio
middleValues(numberA, numberB, numbersBetween);

console.log('Numeri compresi tra i due estremi:');
console.log(numbersBetween);

