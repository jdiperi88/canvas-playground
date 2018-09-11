window.onload = () => {
	//definitions
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var radian = Math.PI / 180;

	//circles
	// context.arc(centerx,centerY,radius,startAngle, endAngle, antiClockwiseDirection)
	context.beginPath();
	context.strokeStyle = "blue";
	context.lineWidth = 10;
	context.fillStyle = "orange";
	context.arc(450, 300, 150, 0 * radian, 360 * radian, false);
	context.stroke();
	context.fill();
};
