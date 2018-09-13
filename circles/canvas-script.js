window.onload = () => {
	//definitions
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var radian = Math.PI / 180;

	//circles
	// context.arc(centerx,centerY,radius,startAngle, endAngle, antiClockwiseDirection)

	//first way

	//body
	// context.beginPath();
	// context.strokeStyle = "orange";
	// context.lineWidth = 10;
	// context.fillStyle = "orange";
	// context.moveTo(250, 250);
	// context.lineTo(330, 310);

	// context.arc(250, 250, 100, 37 * radian, 323 * radian, false);
	// context.lineTo(250, 250);
	// context.stroke();
	// context.fill();

	// //eye
	// context.beginPath();
	// context.fillStyle = "black";
	// context.arc(250, 200, 10, 0 * radian, 360 * radian, false);
	// context.stroke();
	// context.fill();

	//polygons no built in function
	//polygon variables
	var sides = 5;
	var radius = 100;
	var centerX = 500;
	var centerY = 200;
	var startAngle = 200;
	var angle = (2 * Math.PI) / sides;

	//start drawing
	context.beginPath();
	context.strokeStyle = "red";
	context.lineWidth = 5;
	context.lineJoin = "round";
	context.fillStyle = "red";

	//beginning point coordinates
	var beginX = centerX + radius * Math.cos(startAngle);
	var beginY = centerY - radius * Math.sin(startAngle);

	context.moveTo(beginX, beginY);

	//draw lines

	for (var i = 1; i <= sides; i++) {
		var currentAngle = startAngle + i * angle;
		var currentPointX = centerX + radius * Math.cos(currentAngle);
		var currentPointY = centerY - radius * Math.sin(currentAngle);
		context.lineTo(currentPointX, currentPointY);
	}
	context.closePath();
	context.stroke();
	context.fill();
};
