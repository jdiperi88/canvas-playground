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
	context.lineCap = "butt";
	context.strokeStyle = "red"; //changes color of the line
	context.lineWidth = 10; //changes thickness of the line
	context.moveTo(100, 100); // moveTo(x,y) -> starting the point of line
	context.lineTo(300, 100); // line(x,y) -> end point of the line
	context.stroke(); //draws the line

	context.beginPath(); //reset the context state
	context.lineCap = "round";
	context.strokeStyle = "blue"; //changes color of the line
	context.lineWidth = 10; //changes thickness of the line
	context.moveTo(100, 125); // moveTo(x,y) -> starting the point of line
	context.lineTo(300, 125); // line(x,y) -> end point of the line
	context.stroke(); //draws the line

	context.beginPath(); //reset the context state
	context.lineCap = "square";
	context.strokeStyle = "green"; //changes color of the line
	context.lineWidth = 10; //changes thickness of the line
	context.moveTo(100, 150); // moveTo(x,y) -> starting the point of line
	context.lineTo(300, 150); // line(x,y) -> end point of the line
	context.stroke(); //draws the line

	//shadow lines
	context.beginPath();
	context.strokeStyle = "yellow";
	context.lineWidth = 20;
	context.shadowColor = "black";
	context.shadowOffsetX = 2;
	context.shadowOffsetY = 2;
	context.shadowBlur = 5;
	context.moveTo(10, 60);
	context.lineTo(20, 100);
	context.stroke();
};
