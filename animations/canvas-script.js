window.onload = function() {
	// Definitions
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

	window.setInterval(drawRandomColoredRectangle, 1000);

	function drawRandomColoredRectangle(x, y, w, h) {
		// Random Colors
		var color = createRandomRGBColor();
		var fillOpacity = Math.random();
		var fillColor =
			"rgba(" +
			color.r +
			", " +
			color.g +
			", " +
			color.b +
			", " +
			fillOpacity +
			")";
		var borderColor = "rgba(" + color.r + ", " + color.g + ", " + color.b + ")";

		var x = getRandomInt(0, canvas.width);
		var y = getRandomInt(0, canvas.height);
		var w = getRandomInt(0, canvas.width - x);
		var h = getRandomInt(0, canvas.height - y);

		// draw rectangle
		context.beginPath();
		context.fillStyle = fillColor;
		context.strokeStyle = borderColor;
		context.rect(x, y, w, h);
		context.stroke();
		context.fill();
	}

	function createRandomRGBColor() {
		var red = getRandomInt(0, 257);
		var green = getRandomInt(0, 257);
		var blue = getRandomInt(0, 257);
		return { r: red, g: green, b: blue };
	}
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
	}
};
