creatureDamage = 0;
yourDamage = 0;
firstStrike = true;
var bodyPart = ["slash it through its eyes","chop off a leg","stick the knife into its head","smack the thing with your lid","jam the blade in its mouth","dig the knife into its abdomen"];

function fight() {

	// First strike
	if (firstStrike) {
		youHit = Math.floor(Math.random() * 4);
		damageThisRound = Math.floor(Math.random() * 5 + 1);

		if (youHit !== 0) {
			i = Math.floor(Math.random() * 6);
			document.getElementById("no-log").innerHTML += "<p id='game'># You " + bodyPart[i] + " and do " + damageThisRound + " damage.</p>";
			creatureDamage += damageThisRound;
		} else {
			damageThisRound = 5;
			document.getElementById("no-log").innerHTML += "<p id='game'># You go for a stab, but it pierces its foaming fangs through your hand and does " + damageThisRound + " damage. The wound is incredibly painful and you are beginning to feel a tingling sensation up the length of your arm. Will you continue to fight or run away? </p>";
			yourDamage += damageThisRound;
		}
		document.getElementById("buttons-fight").innerHTML = '<button type="button" class="button dragButtons" onclick="fight();lifeCheck()">Keep fighting</button> <button type="button" class="button dragButtons" onclick="runAway();lifeCheck()">Run away</button>';
		firstStrike = false;

	// Furtits strikes
	} else {
		youHit = Math.floor(Math.random() * 3);
		damageThisRound = Math.floor(Math.random() * 5 + 1);

		if (youHit !== 0) {
			i = Math.floor(Math.random() * 6);
			document.getElementById("no-log").innerHTML += "<p id='game'># You " + bodyPart[i] + " and do " + damageThisRound + " damage.</p>";
			creatureDamage += damageThisRound;

			if (creatureDamage >= 10) {
				document.getElementById("no-log").innerHTML += "<p id='game'># The creature lets out a piercing shriek and scurries back towards the drain. You quickly slam the pot lid down on its head and hack off the massive abdomen with the tiny blade. Out of the still pulsing body oozes a putrid mess of goo and small white sacks.</p>";
				reset();
			}
		} else {
			damageThisRound = 5;
			yourDamage += damageThisRound;
			if (yourDamage === 5) {
				document.getElementById("no-log").innerHTML += "<p id='game'># You go to strike, but from its abdomen it sprays a noxious fluid into your eyes and does " + damageThisRound + " damage. Your vision now has trails and you've lost your sense of balance.</p>";
			} else {
				document.getElementById("no-log").innerHTML += "<p id='game'># You try to strike it in the mouth, but it sinks its fangs into your forearm and injects a healthy dose of venom. You fall to the ground reeling in pain. You are severely hallucinating now. You think you see another creature on the counter. Your vision turns dark and the last thing you sense is the feeling of prickly insect legs on your chest, then your neck, then face.</p>";
				reset();
			}
		}

	}
}

function runAway () {
	run = Math.floor(Math.random() * 3);

	if (run === 0) {
		document.getElementById("no-log").innerHTML += "<p id='game'># The creature gets briefly distracted from slipping in a soapy puddle and you use the opporunity to run and hide behind the couch. It becomes quiet and after a few minutes you look around. You cannot find the creature anywhere. A week later you have still not seen it, however, you begin finding what looks like moist cotton balls around the house. You've made a terrible mistake.</p>";
	} else {
		document.getElementById("no-log").innerHTML += "<p id='game'># You turn to run away, but the creature leaps after you. It lands on your leg and begins stabbing into it furiously. Each time injecting more venom. You fall to your back. Your vision begins to darken. It crawls up onto your belly and pierces into it with a stinger from its abdomen. It's injecting something, but not venom. You are completely paralyzed, but you see it placing what looks like an egg sack into your gut. You lie there watching it work until everything finally turns black.</p>";
		yourDamage = 10;
	}
	reset();
}

function lifeCheck() {
	function zcroll() {
			var objDiv = document.getElementById("fight-log");
			objDiv.scrollTop = objDiv.scrollHeight;
			}
	zcroll();
	if (creatureDamage > 10) {
			creatureDamage = 10;
	}

	document.getElementById("yourHealth").innerHTML = 10 - yourDamage;
	document.getElementById("itHealth").innerHTML = 10 - creatureDamage;

	if (yourDamage === 5) {
		document.getElementById('yourStats').style.backgroundColor = '#e2b100';
	} else if (yourDamage === 10) {
		document.getElementById('yourStats').style.backgroundColor = '#e00000';
	}
	if (creatureDamage === 10) {
		document.getElementById('itStats').style.backgroundColor = '#e20000';
	} else if (creatureDamage >= 7) {
		document.getElementById('itStats').style.backgroundColor = '#e2b100';
	} else if (creatureDamage >= 4) {
		document.getElementById('itStats').style.backgroundColor = '#c7e200';
	}
}

function reset() {
	document.getElementById("buttons-fight").innerHTML = '<button type="button" class="button dragButtons startOver" onclick="location.reload()">Reset</button>';
}
