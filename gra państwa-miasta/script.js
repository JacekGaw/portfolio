var playerOnePkts = 0;
var playerTwoPkts = 0;
var round = 1;
var losowanieSound = new Audio("sounds/letter.mp3");
var morepktSound = new Audio("sounds/click.mp3");
var countingSound = new Audio("sounds/counting.mp3");
var sirenSound = new Audio("sounds/siren.mp3");

var playerOneName = prompt("Wprowadź nazwę gracza numer jeden: ");
var playerTwoName = prompt("Wprowadź nazwę gracza numer dwa: ");
document.getElementById("playerOneNameKlawisz").innerHTML = playerOneName;
document.getElementById("playerTwoNameKlawisz").innerHTML = playerTwoName;

document.getElementById("playerOneName").innerHTML = playerOneName;
document.getElementById("playerTwoName").innerHTML = playerTwoName;

document.querySelector("#round").innerHTML = "Runda: " + round;
document.querySelector("p").innerHTML = playerOnePkts;
document.querySelectorAll("p")[1].innerHTML = playerOnePkts;

var categories = ["rzecz","imię","państwo","miasto","zwierzę","roślina","samochód","zawód","kolor","rzeka","sport"];
document.getElementById("kategoria").innerHTML = "Kategoria: ";

var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","Ł","M","N","O","P","R","S","Ś","T","U","W","Y","Z","Ź","Ż"];
document.getElementById("litera").innerHTML = "Litera: ";


//dodawanie punktów wraz z dźwiękiem//
function playerOnePkt() {
	morepktSound.pause();
	morepktSound.play();
	playerOnePkts += 1;
	document.querySelector("p").innerHTML = playerOnePkts;
}
function playerTwoPkt() {
	morepktSound.pause();
	morepktSound.play();
	playerTwoPkts += 1;
	document.querySelectorAll("p")[1].innerHTML = playerTwoPkts;
}
//////////////////////////////////////
//losowanie kategorii i litery//
function losowanieKategorii() {
	var losowana = Math.floor(Math.random()*(categories.length));
	morepktSound.pause();
	morepktSound.play();
	document.getElementById("kategoria").innerHTML ="Kategoria: " + categories[losowana];
}
function losowanieLitery(){
	losowanieSound.play();
setTimeout(function litery() {
	var losowana = Math.floor(Math.random()*(letters.length));
	document.getElementById("litera").innerHTML ="Litera: " + letters[losowana];
},2000);
};
/////////////////////////////////
// 
document.getElementById("whoTalk").innerHTML = "Na razie nikt!";
var ifClicked = 0;
window.addEventListener('keydown', function() {
  switch (event.keyCode) {
    case 65: // a
    if (ifClicked == 0) {
      document.getElementById("whoTalk").innerHTML = playerOneName;
      countingSound.play();
      setTimeout(function() {
      	countingSound.pause();
      	sirenSound.play();
      },3000);
      ifClicked++;
 		}
    break;
 
    case 76: // l
      if (ifClicked == 0) {
      document.getElementById("whoTalk").innerHTML = playerTwoName;
      countingSound.play();
      setTimeout(function() {
      	countingSound.pause();
      	sirenSound.play();
      },3000);
      ifClicked++
  		}
    break;
  }
});

//kolejna runda 
function nextRound() {
	document.getElementById("kategoria").innerHTML ="Kategoria: ";
	document.getElementById("litera").innerHTML ="Litera: ";
	document.getElementById("whoTalk").innerHTML = "Na razie nikt!";
	ifClicked = 0;
	round++;
	document.querySelector("#round").innerHTML = "Runda: " + round;
}
function newGame() {
	document.getElementById("kategoria").innerHTML ="Kategoria: ";
	document.getElementById("litera").innerHTML ="Litera: ";
	document.getElementById("whoTalk").innerHTML = "Na razie nikt!";
	ifClicked = 0;
	round = 1;
	document.querySelector("#round").innerHTML = "Runda: " + round;
	playerOnePkts = 0;
	playerTwoPkts = 0;
	document.querySelector("p").innerHTML = playerOnePkts;
	document.querySelectorAll("p")[1].innerHTML = playerOnePkts;
	var playerOneName = prompt("Wprowadź nazwę gracza numer jeden:");
var playerTwoName = prompt("Wprowadź nazwę gracza numer dwa:");
document.getElementById("playerOneName").innerHTML = playerOneName;
document.getElementById("playerTwoName").innerHTML = playerTwoName;
}
