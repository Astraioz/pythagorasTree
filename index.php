<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title> PyTree </title>

	<!--<link href="bootstrap/css/bootstrap_addition.css" rel="stylesheet">-->


	<link href="style.css" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
	<script type="text/javascript" src="https://code.jquery.com/jquery-1.7.1.min.js"></script>
</head>

<body>

	<div id="description">
		<header>
			<div style="text-align: center;">
				<hr />
				<h1>The Pythagoras Tree</h1>
				<p class="headerText">In HTML5 Canvas and JavaScript</p>
				<hr />
			</div>
		</header>

		<form id="settingsForm" >
			<table>


				<tr>
					<td>Iterations</td>
					<td>
						<!--<input class="textInput" size="4" type="text" id="iterations" value="10" />-->
						<input type="range" id="iterations" value="10" min="0" max="14" />
						<!--<input type="checkbox" id="autoIterations" checked="checked"/>
						<small>auto</small></td>-->
					</tr>
					<tr>
						<td>Base size</td>
						<td>
							<!--<input class="textInput" size="4" type="text" id="baseSize" value="150" />-->
							<input type="range" id="baseSize" value="100" min="0" max="300" />
						</td>
					</tr>
					<tr>
						<td>α</td>
						<td>
							<input type="range" id="angle1" value="50" min="1" max="90" />
						</td>
					</tr>
					<tr>
						<td>β</td>
						<td>
							<input type="range" id="angle2" value="40" min="1" max="90" />
							<!--<input class="textInput" size="4" type="text" id="angle2" value="40" />-->
						</td>
					</tr>
					<tr>
						<td>Render triangle lines</td>
						<td>
							<input type="checkbox" id="triangleLines"/>
						</td>
					</tr>
					<tr>
						<td colspan="2">&nbsp;</td>
					</tr>
					<tr>
						<td colspan="2"><input type="button" id="startButton" value="Draw" />
							&nbsp;
							<input type="button" id="viewPNG" value="View as PNG" />
						</td>
					</tr>
				</table>
			</form>

		</div>

		<canvas id="canvas" width="0" height="0"> </canvas>

		<script src="main.js"></script>
	</body>

	</html>
