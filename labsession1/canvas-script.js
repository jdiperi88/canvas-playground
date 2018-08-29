window.onload = () => {
	//definitions
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

	//Drawing lines
	context.beginPath(); //reset the context state
	context.strokeStyle = "red";
	context.lineWidth = 15; //changes thickness of the line
	context.lineJoin = "round";
	context.moveTo(60, 80); // moveTo(x,y) -> starting the point of line
	context.lineTo(160, 80); // line(x,y) -> end point of the line
	context.lineTo(100, 220);
	context.lineTo(180, 180);
	context.stroke(); //draws the line
};
