i = 0;

function play() {
	document.getElementById("game").innerHTML += "# " + setup[i] + "<br>";
	i++;
	
	if (i === setup.length) {
		document.getElementById('startGame').style.display = 'none';
		document.getElementById('table_creatureFight').style.display = 'block';
		document.getElementById('buttons').style.display = 'block';
	}
};

function startCheck() {
	if (i > 0) {
	document.getElementById("startGame").innerHTML = '<button type="button" class="button dragButtons" onclick="play();lifeCheck()"> Continue</button> <button type="button" class="button dragButtons" onclick="skipIntro();lifeCheck()"> Skip Intro</button>';
	}
}

function skipIntro() {
	while (i < setup.length) {
		document.getElementById('game').innerHTML += "# " + setup[i] + "<br>";
		i++;
	}
	
	document.getElementById('startGame').style.display='none';
	document.getElementById('table_creatureFight').style.display='block';
	document.getElementById('buttons').style.display='block';
};

setup = [
	"You are in your kitchen washing dishes after eating an entire box mac and cheese.",
	"You pull the plug and start to watch the cloudy water level drop, but it stops after only a few seconds.",
	"The water sits still in the sink. You reach down into the pool to clear the blockage. You see the wooden spoon that must be lodged in the drain. You wrap your fingers around it, but recoil your arm, splashing water onto the floor. It is not a wooden spoon; it felt like a pipe cleaner. You look into the water and faintly see the thing moving around.",
	"It breaks the surface. It's a large, bristly insect leg. Three more follow it and explore around the basin.",
	"They push down firmly into the sink and a larger mass becomes visible in the depth of the water.",
	"Though it squeezes through the small drain, it swells up to a greater size after escaping the bottleneck.",
	"It's head looks like a sea urchin with dollops of sturgeon caviar for eyes.",
	"An abdomen that looks like a swollen and rotten durian fruit along with four more legs all come up out of the drain.",
	"There is a creature, the size and shape of an opened umbrella, crawling onto your counter.",
	"You stumble back and knock over the milk. It turns towards you, opens up three sharp black fangs and makes a foaming hiss at you.",
	"You grab a pairing knife from the counter and the lid from the pot to protect yourself. It crouches low, preparing to leap..."
];

