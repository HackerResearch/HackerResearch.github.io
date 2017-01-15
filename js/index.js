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
	".78 decibel increase in train whistles",
	"influence of moe anime characters",
	"lack of higher dimensional education",
	"prevalence of internet trolls",
	"decapitation of innocent lettuce heads",
	"prevention of anti-progress groups",
	"analysis of new wave jazz",
	"popularity of slowed down elevator music"
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
	"the intelligence levels of uneducated household pets",
	"the stress levels of undergraduate student researchers",
	"the disappointment of subsidized children in poverty",
	"the prevalence of the Kony 2012 campaign",
	"the economic state of Greece",
	"the covertness of Putin's communications with Trump",
	"the current state of affairs",
	"the underlying Illuminati presence",
	"the destruction of the fourth wall",
	"the destruction of humanity as we know it"
];

function getRandomElement(things) {
	return things[Math.floor(Math.random()*things.length)]
}

var question = document.getElementById('question');
var qnum = 2;
var questions = function() {
	switch(Math.floor(Math.random()*qnum)) {
	case 0:
		question.textContent = "What does the " + getRandomElement(concept1) + " in " + getRandomElement(place) + " mean for " + getRandomElement(concept2) + "?";
		break;
	case 1:
		question.textContent = "What does the correlation between the " + getRandomElement(concept1) + " and " + getRandomElement(concept2) + " imply?";
		break;
	}
};

questions();

var butt = document.getElementById('butt');
butt.onmousedown = function() { questions(); };