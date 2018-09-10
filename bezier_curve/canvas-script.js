window.onload = () => {
	//definitions
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var radian = Math.PI / 180;

	//bezier curve
	// context.bezierCurveTo(controlx1,controlY1,controlx2,controlY2, endx, endy)
	context.beginPath();
	context.strokeStyle = "blue";
	context.lineWidth = 10;
	context.moveTo(200, 250);

	context.bezierCurveTo(0, 0, 500, 100, 500, 1000);

	context.stroke();
};
