<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title>PythagorasTree</title>

	<link href="style.css" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
</head>
<body>

	<div id="description">

		<header>
			<div style="text-align: center;">
				<hr/>
				<h1>The Pythagoras Tree</h1>
				<p class="headerText">In HTML5 Canvas and JavaScript</p>
				<hr/>
			</div>
		</header>

		<table>
			<tr>
				<td>Iterations</td>
				<td>
					<input type="range" id="iterations" value="10" min="0" max="14" />
				</td>
			</tr>
			<tr>
				<td>Base size</td>
				<td>
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
				</td>
			</tr>
			<tr>
				<td>Render triangle lines</td>
				<td>
					<input type="checkbox" id="triangleLines"/>
				</td>
			</tr>

		</table>
	</div>

	<canvas id="canvas" width="0" height="0"> </canvas>
	<script src="main.js"></script>

</body>
</html>
