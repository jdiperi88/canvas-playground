window.onload = function() {
	//definitions
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	//context.scale(horizontalScaleFactor, verticalScaleFactor, ) -> scales the canvas context
	//horizontalScaleFactor(double): scales the width of the current drawing
	//verticalScaleFactor(double): scales the height of the current drawing

	//red rect
	context.fillStyle = "red";
	context.fillRect(50, 50, 100, 40);
	context.fill();

	//scale
	context.scale(2, 2);

	//scaled version
	context.fillStyle = "blue";
	context.fillRect(50, 50, 100, 40);
	context.fill();

	//scale
	context.scale(2, 2);
	//scaled version
	context.fillStyle = "green";
	context.fillRect(50, 50, 100, 40);
	context.fill();
};
