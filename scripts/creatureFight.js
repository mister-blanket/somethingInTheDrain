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
			document.getElementById("game").innerHTML += "# You " + bodyPart[i] + " and do " + damageThisRound + " damage.<br>";
			creatureDamage += damageThisRound;
		} else {
			damageThisRound = 5;
			document.getElementById("game").innerHTML += "# You go for a stab, but it pierces its foaming fangs through your hand and does " + damageThisRound + " damage. The wound is incredibly painful and you are beginning to feel a tingling sensation up the length of your arm. Will you continue to fight or run away? <br>";
			yourDamage += damageThisRound;
		}
		document.getElementById("buttons").innerHTML = '<button type="button" class="button dragButtons" onclick="fight();lifeCheck()">Keep fighting</button> <button type="button" class="button dragButtons" onclick="runAway();lifeCheck()">Run away</button>';
		firstStrike = false;
	
	// Furtits strikes
	} else {
		youHit = Math.floor(Math.random() * 3);
		damageThisRound = Math.floor(Math.random() * 5 + 1);
		
		if (youHit !== 0) {
			i = Math.floor(Math.random() * 6);
			document.getElementById("game").innerHTML += "# You " + bodyPart[i] + " and do " + damageThisRound + " damage.<br>";
			creatureDamage += damageThisRound;
			
			if (creatureDamage >= 10) {
				document.getElementById("game").innerHTML += "The creature lets out a piercing shriek and scurries back towards the drain. You quickly slam the pot lid down on its head and hack off its abdomen with the tiny blade. Out of the pulsing body oozes a putrid mess of goo and small white sacks.";
				reset();   
			}
		} else {
			damageThisRound = 5;
			yourDamage += damageThisRound;
			if (yourDamage === 5) {
				document.getElementById("game").innerHTML += "# You go to strike, but from its abdomen sprays a noxious fluid into your eyes and does " + damageThisRound + " damage. Your vision now has trails and you've lost your sense of balance.<br>";
			} else {
				document.getElementById("game").innerHTML += "# You try to stike it in the mouth, but it sinks its fangs into your forearm and injects a healthy dose of venom. You fall to the ground reeling in pain. You are severely hallucinating now. You think you see another creature on the counter. Your vision turns dark and the last thing you remember is the feeling of light pressing on your chest, then your neck, then face.";
				reset(); 
			}
		}
		
	}	
}

function runAway () {
	run = Math.floor(Math.random() * 3);
	
	if (run === 0) {
		document.getElementById("game").innerHTML += "# The creature gets briefly distracted from slipping on a soggy noodle and you use the opporunity to hide behind the couch. It becomes quite and after a few minutes you begin looking around. You cannot find the creature anywhere. A week and later you have still not seen it, however, you begin finding what looks like moist cotton balls around the house. You've made a terrible mistake.";
	} else {
		document.getElementById("game").innerHTML += "# You turn to run away, but the creature leaps after you. It lands on your leg and begins stabbing into it furiously. Each time injecting more venom. You fall to your back. Your vision begins to darken. It crawls up onto your belly and pierces into it belly with a stinger on its abdomen. It's injecting something, but not venom. You are completel paralyzed, but you see it placing what looks like an egg sack into your gut. You lie there watching it work until everything finally turns black.";
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
	console.log(creatureDamage);
	document.getElementById("yourHealth").innerHTML = 10 - yourDamage;
	document.getElementById("creatureHealth").innerHTML = 10 - creatureDamage;
	
	if (yourDamage === 5) {
		document.getElementById('yourHealth').style.color = '#e2b100';
	} else if (yourDamage === 10) {
		document.getElementById('yourHealth').style.color = '#e00000';
	}
	if (creatureDamage === 10) {
		document.getElementById('creatureHealth').style.color = '#e20000';
	} else if (creatureDamage >= 7) {
		document.getElementById('creatureHealth').style.color = '#e2b100';
	} else if (creatureDamage >= 4) {
		document.getElementById('creatureHealth').style.color = '#c7e200';
	}
}

function reset() {
	document.getElementById("buttons").innerHTML = '<button type="button" class="button dragButtons" onclick="location.reload()">Reset</button>';
}