
/**********************************************************
| # SNACK 1
**********************************************************/

/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

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
    }
];

// Stampa diretta
// console.log('Stampa diretta del peso della bicicletta più leggera: ' + myArray[1].peso);


// Scrivo una funzione per stampare il peso minore

findMinWeight = (array) => {
    // Dichiaro un Array dove pusherò i vari pesi
    let pesoArray =[];

    // FOR EACH elemento (object in questo caso) nell'array, pusho il valore di "peso" nel nuovo Array
    array.forEach((bicicletta)=>{
        pesoArray.push(bicicletta.peso);
    })

    // Ottengo il valore minimo tramite Math sul nuovo Array
    const pesoMin = Math.min.apply(Math, pesoArray);

    // CONSOLE LOG DI CONTROLLO
    // console.log(pesoArray);
    // console.log('Peso minore: ' + pesoMin);

    return pesoMin;
}

// Richiamo la funzione
const pesoMinimo = findMinWeight(myArray);
console.log('La bicicletta che pesa di meno pesa: ' + pesoMinimo + ' Kg');







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








/**********************************************************
| # SNACK 3
**********************************************************/

/*
Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/
