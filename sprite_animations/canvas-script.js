window.onload = function() {
	//definitions
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

	var tile = new Image();
	tile.src = "tile.png";

	tile.onload = function() {
		context.drawImage(tile, 0, 0, 768, 200, 60, 0, 768, 200);
	};

	var cellWidth = 192;
	var cellHeight = 200;

	function drawTileCell(index) {
		context.drawImage(
			tile,
			index * cellWidth,
			0,
			cellWidth,
			cellHeight,
			360,
			300,
			cellWidth,
			cellHeight
		);
	}

	window.requestAnimationFrame(animationLoop);

	//counter
	var cell = 0;
	var start = new Date();

	function animationLoop() {
		var now = new Date();
		if (now - start >= 100) {
			start = now;
			context.clearRect(0, 200, canvas.clientWidth, canvas.height - 200);

			//updated
			cell++;
			cell %= 4;

			//draw
			drawTileCell(cell);
		}
		//animation
		window.requestAnimationFrame(animationLoop);
	}
	window.requestAnimationFrame = (function() {
		return (
			window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback) {
				window.setTimeout(callback, 1000 / 60);
			}
		);
	})();
};
