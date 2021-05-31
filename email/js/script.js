var email = ['pippo@gmail.com', 'topolino@libero.it', 'paperino@hotmail.it', 'minnie@virgilio.it', 'pluto@gmail.com'];

var emailUtente = prompt('Qual è la tua email?');

var success = email.includes(emailUtente);

if(success == true){
    document.getElementById('verifica').innerHTML = 'Email presente nella lista, puoi entrare!';
} else {
    document.getElementById('verifica').innerHTML = 'Mi dispiace, la tua email non è presente nella lista';
}

