<!DOCTYPE html>
<html>
<head>

</head>
<body>			
	<div class="subbanner">
		<div class="container">
		 <h1>Something in the Drain</h1>
		 <h3>A text-based RPG made using JavaScript</h3>
		</div>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-md-12">	
				<div class="bash-box">
					<div class="box-top">
						<div class="box-title">
							<p>Something in the Drain</p>
						</div>
						<div class="box-buttons">
							<p>X</p>
						</div>
					</div>
					<div class="fight-log" id="fight-log">
						<p id="game"></p>
					</div>
				</div>

				<div id="startGame">
					<button type="button"
					class="button dragButtons" onclick="play();startCheck();">
					Start</button>

					<button type="button"
					class="button dragButtons" onclick="skipIntro();lifeCheck()">
					Skip Intro</button>
				</div>

				<table class="table_dragonSlayer" id="table_creatureFight" style="display:none">
					<tr class="head">
						<td>Your Health</td>
						<td>Creature Health</td>
					</tr>
					<tr class="body">
						<td id="yourHealth">10</td>
						<td id="creatureHealth">10</td>
					</tr>
				</table>

				<div id="buttons" style="display:none">
					<button type="button"
					class="button dragButtons" onclick="fight();lifeCheck()">
					Fight the thing</button>

					<button type="button"
					class="button dragButtons" onclick="runAway();lifeCheck()">
					Run away</button>
				</div>
			</div>
		</div>
	</div>

	<script src="scripts/setup.js"></script>
	<script src="scripts/creatureFight.js"></script>
		
</body>
</html>
