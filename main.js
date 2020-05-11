
/*------ SPACESHIP INFO: Object -------*/

var shipSpace = {
  shipname:"AmazonX",
  shipmodel:"ideo123",
  crew:1250,
};

document.getElementById("infoSpaceship").innerHTML = shipSpace.shipname +' '+ shipSpace.shipmodel + ' ' +"spaceship"+ ' ' +" has " + shipSpace.crew + ' ' + "crew members among mechanical technicians, scientists, biologists and physicians.";

/*-------- FUEL CONSUMPTION: Array -------*/

var fuelUsage = [85, 135, 100, 99];
document.getElementById("moreFuel").innerHTML = fuelUsage[1]+''+"%";
document.getElementById("rightFuel").innerHTML = fuelUsage[2]+''+"%";

/*------ AVERAGE OF BEER : Array -------*/

var beerAmount = [3, 7, 7, 8, 9, 8, 7, 9, 5];
var total = 0;

total += beerAmount[0];
total += beerAmount[1];
total += beerAmount[2];
total += beerAmount[3];
total += beerAmount[4];
total += beerAmount[5];
total += beerAmount[6];
total += beerAmount[7];
total += beerAmount[8];

alert("That is the average of beer cans that the captain of the spaceship drinks per day"+' '+"="+' '+(total/beerAmount.length));

/*------ ELON MUSK'S QUOTE : DOM -------*/

document.getElementById("quoteButton").addEventListener("click", function(){
  document.getElementById("elonQuote").innerHTML = "\"We're going to make it happen. As God is my bloody witness, I'm hell-bent on making it work.\" - Elon Musk (The Boss)";
});

/*------ CONVERTER DISTANCE: Function -------*/

function milesKm(miles){
	var kilometers = miles / 0.62137;
	return kilometers;
}

var currentDistance = milesKm(35000000);
document.getElementById('converter').innerHTML=(currentDistance +' '+"km.");