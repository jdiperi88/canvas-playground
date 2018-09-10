window.onload = function() {
	// Definitions
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

	// rectangle
	//context.rect(xcoord,ycoord,width, height)
	context.beginPath();
	context.strokeStyle = "red";
	context.lineWidth = 10;
	context.fillStyle = "blue";
	context.lineJoin = "round";
	context.rect(50, 200, 200, 200);
	context.stroke();
	context.fill();

	// filled rectangle function
	//context.rect(xcoord,ycoord,width, height)
	context.fillStyle = "green";
	context.fillRect(300, 200, 200, 200);

	// clear rect similar to an eraser

	context.clearRect(0, 0, 600, 600);
};
