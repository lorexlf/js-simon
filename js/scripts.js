// *Simon says*
// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo aver inserito i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

$(document).ready(function(){
  // Code

  // Definisco quanti numeri devono essere ricordati
  var numbersToRemember = 5;

  // Lista X numeri random
  var defaultNumbers = [];

  // Genero N numeri random fino a 5 unici
  while (defaultNumbers.length < numbersToRemember) {
    var numRandom = getRandomNumber(1, 100); // Numero random
    var check = isInArray(defaultNumbers, numRandom); // True or false
    if (check == false) {
      defaultNumbers.push(numRandom);
    }
  }

  // Un alert espone 5 numeri casuali.
  var gameNumbers = alert(defaultNumbers);

  // Start Game

  var userNumbersList = [];

  setTimeout(userTry, 1000);

  function userTry() {
    // Chiedo N numeri fino a 5 unici
    while (userNumbersList.length < numbersToRemember) {
      var numUser = parseInt(prompt('Inserisci il numero')); // Numero utente
      var check = isInArray(userNumbersList, numUser); // True or false
      if (check == false) {
        userNumbersList.push(numUser);
      } else {
        alert('Hai già inserito questo numero!');
      }
    }
    console.log('NUMERI UTENTE: ' + userNumbersList);
  }

  console.log('NUMERI RANDOM: ' + defaultNumbers);


  //////////////////////////////////////////////////
  // F U N C T I O N S
  //////////////////////////////////////////////////

  // FX Random Number
  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // Included min & max
  }

  // FX isInArray
  function isInArray(array, element) {
    var result = false;
    var i = 0;
    while (i < array.length && result == false) {
      if (array[i] == element) {
        result = true;
      }
      i++;
    }
    return result;
  }

/////
}); // Document Ready
