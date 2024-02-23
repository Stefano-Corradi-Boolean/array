
//   all'interno delle quadre inserico n elementi che possono essere di qualsiasi tipo (anche mischiati) e saparati da virigola
const colori = ['giallo', 'rosso', 'blu'];

console.log(colori);
console.log(colori[0]);
console.log(colori[1]);
console.log(colori[2]);

const numeri = [3, 5, 78, 98];

console.log('il 78 è: ', numeri[2]);

// modifico un elemnto
colori[2] = 'verde'

console.log(colori.length);
console.log(colori.length - 1); // ultimo indice
// ultimo elemento = lunghezza array - 1
console.log(colori[colori.length - 1]);

// METODI DEGLI ARRAY ////////////////////////////
// lunghezza dell'array
console.log(colori.at(1)) // = colori[2]
// ultimo elemento con at
console.log(colori.at(-1))

// aggiungo un elemento in coda all'array
colori.push('arancione');
console.log(colori);
// aggiungo un elemento all'inizio dell'array
colori.unshift('viola');
console.log(colori);
// tolgo l'ultimo elemento
colori.pop()
console.log(colori);
// elimino l'elemto a indice 1
// splice(indice, quanti elementi voglio eleimiare)
colori.splice(1,1);
console.log(colori);

const nomi = ['ugo', 'pino', 'gino', 'nino', 'marta']
// elimino gino
// nomi.splice(2, 1)
// console.log(nomi);
// elimino da pino a nino
const nomiEliminati =  nomi.splice(1,2) // salvo gli elementi eliinati in un nuovo array
// console.log(nomi);
// elimino tutti da pino in avanti (se metto un solo valore elimina tutto fino alla fine dell'array)
// nomi.splice(1)
console.log(nomiEliminati);
console.log(nomi);

// trasformo un array in una stringa
console.log(colori.toString());
// trasformo un array in una stringa concatenando gli elemnti con un separatore arbitrario
console.log(colori.join(' | '));

// ciclo un array
// il ciclo è valido fino a che l'indice è inferiore alla lunghezza dell'array
for(let i = 0; i < colori.length; i++){
  // leggo l'elemento a indic ei
  console.log(i , `colori[${i}]`);
  console.log(colori[i]);
}