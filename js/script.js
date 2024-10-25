
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

        // Le proprietà possono contenere un METODO, cioè una funzione richiamabile che si dichiara così:
        getOutput: () => {
            return 'Output'
        },
    },

    // Anche l'oggetto può contenere un METODO
    getOtherOutput: () => {
        return 'Other Output'
    },
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








/**********************************************************
| # SVOLGIMENTO - Snack 1
**********************************************************/



