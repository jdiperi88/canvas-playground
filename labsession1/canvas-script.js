window.onload = () => {
	//definitions
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var radian = Math.PI / 180;
	//first arc
	context.beginPath(); //reset the context state
	context.strokeStyle = "red";
	context.lineWidth = 15; //changes thickness of the line
	context.lineJoin = "round";
	context.arc(100, 80, 50, 0 * radian, 180 * radian, false);
	context.stroke(); //draws the line

	//second arc
	context.beginPath(); //reset the context state
	context.strokeStyle = "green";
	context.lineWidth = 15; //changes thickness of the line
	context.lineJoin = "round";
	context.arc(100, 30, 50, 45 * radian, 320 * radian, false);
	context.stroke(); //draws the line
};
