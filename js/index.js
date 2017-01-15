var concept1 = [
	"devaluation of education",
	"deforestation of suburbs",
	"rise of the lizard people",
	"increase in dragons",
	"thefts of national documents",
	"importance of the bee movie",
	"inflation of the helium balloon economy",
	"invalidation of the known laws of aviation",
	"creation of destructive beings",
	"increase in pretzel consumption",
	"dehydration of Red Bull chuggers",
	".78 decibel increase in train whistles"
];

var place = [
	"rural areas",
	"Phoenix, AZ",
	"the middle of nowhere",
	"Camelot",
	"the average American household",
	"pop culture",
	"the White House",
	"sketchy motel bathrooms",
	"the middle of the Marianas Trench"
];

var concept2 = [
	"uneducated household pets",
	"undergraduate student researchers",
	"subsidized children in poverty",
	"the Kony 2012 campaign",
	"the Greek economy",
	"Putin's connection with Trump",
	"current state of affairs",
	"underlying Illuminati presence",
	"destruction of the fourth wall",
	"humanity as we know it"
];

function getRandomElement(things) {
  return things[Math.floor(Math.random()*things.length)]
}

var question = document.getElementById('question');

var questions = function() {
  question.textContent = "What does the " + getRandomElement(concept1) + " in " + getRandomElement(place) + " mean for " + getRandomElement(concept2) + "?";
};

questions();

var butt = document.getElementById('butt');
butt.onmousedown = function() { questions(); };