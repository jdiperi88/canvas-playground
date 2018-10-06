window.onload = () => {
	//definitions
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	// state stack
	//content.save()  => saving the context state-canvas
	//context.restore() => restoring the state from the state stack

	//rect 1
	context.fillStyle = "red";
	context.fillRect(240, 100, 120, 120);
	context.save();

	//rect 2
	context.fillStyle = "green";
	context.fillRect(390, 100, 120, 120);
	context.save();

	//rect 3
	context.fillStyle = "blue";
	context.fillRect(540, 100, 120, 120);
	context.save();

	//rect 4
	context.restore();
	context.fillRect(240, 300, 120, 120);
	//rect 5
	context.restore();
	context.fillRect(390, 300, 120, 120);

	//rect 6
	context.restore();
	context.fillRect(540, 300, 120, 120);
};
