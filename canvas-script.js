window.onload = () => {
	//definitions
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

	// // blue rectangle
	// context.fillStyle = "blue";
	// context.fillRect(10, 40, 30, 70);

	// // yellow rectangle
	// context.fillStyle = "yellow";
	// context.fillRect(50, 30, 60, 30);

	//Drawing lines
	context.beginPath(); //reset the context state
	context.strokeStyle = "red"; //changes color of the line
	context.lineWidth = 10; //changes thickness of the line
	context.moveTo(0, 0); // moveTo(x,y) -> starting the point of line
	context.lineTo(600, 300); // line(x,y) -> end point of the line
	context.stroke(); //draws the line
};
