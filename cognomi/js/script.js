var cognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];

var cognomeUtente = prompt('Qual è il tuo cognome?');

cognomi.push(cognomeUtente.toUpperCase());

document.getElementById('lista').innerHTML = cognomi;

cognomi.sort();

document.getElementById('lista-ordinata').innerHTML = cognomi;

document.getElementById('posizione').innerHTML = cognomi.indexOf(cognomeUtente);