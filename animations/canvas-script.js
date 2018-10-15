// window.onload = function() {
// 	// Definitions
// 	var canvas = document.getElementById("canvas");
// 	var context = canvas.getContext("2d");
// 	var start = new Date();
// 	window.requestAnimationFrame(drawRandomColoredRectangle);

// 	function drawRandomColoredRectangle(x, y, w, h) {
// 		var now = new Date();
// 		if (now - start >= 1000) {
// 			start = now;

// 			// clear rect
// 			context.clearRect(0, 0, canvas.width, canvas.height);
// 			// Random Colors
// 			var color = createRandomRGBColor();
// 			var fillOpacity = Math.random();
// 			var fillColor =
// 				"rgba(" +
// 				color.r +
// 				", " +
// 				color.g +
// 				", " +
// 				color.b +
// 				", " +
// 				fillOpacity +
// 				")";
// 			var borderColor =
// 				"rgba(" + color.r + ", " + color.g + ", " + color.b + ")";

// 			var x = getRandomInt(0, canvas.width);
// 			var y = getRandomInt(0, canvas.height);
// 			var w = getRandomInt(0, canvas.width - x);
// 			var h = getRandomInt(0, canvas.height - y);

// 			// draw rectangle
// 			context.beginPath();
// 			context.fillStyle = fillColor;
// 			context.strokeStyle = borderColor;
// 			context.rect(x, y, w, h);
// 			context.stroke();
// 			context.fill();
// 		}
// 		//animate
// 		window.requestAnimationFrame(drawRandomColoredRectangle);
// 	}

// 	function createRandomRGBColor() {
// 		var red = getRandomInt(0, 257);
// 		var green = getRandomInt(0, 257);
// 		var blue = getRandomInt(0, 257);
// 		return { r: red, g: green, b: blue };
// 	}
// 	function getRandomInt(min, max) {
// 		min = Math.ceil(min);
// 		max = Math.floor(max);
// 		return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
// 	}

// 	window.requestAnimationFrame = (function() {
// 		return (
// 			window.requestAnimationFrame ||
// 			window.webkitRequestAnimationFrame ||
// 			window.mozRequestAnimationFrame ||
// 			window.msRequestAnimationFrame ||
// 			function(callback) {
// 				window.setTimeout(callback, 1000 / 60);
// 			}
// 		);
// 	})();
// };

window.onload = function() {
	// Definitions
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var ballX = 400;
	var changeX = 4;
	var ballY = 300;
	var changeY = 4;
	var ballRadius = 30;
	var ballColor = "orange";

	window.requestAnimationFrame(animationLoop);

	function animationLoop() {
		// clear canvas
		context.clearRect(0, 0, canvas.width, canvas.height);
		if (ballY + ballRadius > canvas.height - 150) {
			changeY += -1;
		}
		if (ballX + ballRadius > canvas.width - 150) {
			changeX += -1;
		}
		if (ballX - ballRadius < 0 + 50) {
			changeX += 1;
		}
		if (ballY - ballRadius < 0) {
			changeY += 1;
		}
		// update
		ballX += changeX;
		ballY += changeY;
		// draw ball
		drawBall(ballX, ballY, ballRadius, ballColor);
		drawBall(ballX + 100, ballY, ballRadius, "blue");
		drawBall(ballX + 100, ballY + 100, ballRadius, "red");
		drawBall(ballX + 20, ballY + 100, ballRadius, "red");
		drawBall(ballX + -80, ballY + 150, ballRadius, "red");
		drawBall(ballX + 180, ballY + 150, ballRadius, "red");

		//animate
		window.requestAnimationFrame(animationLoop);
	}

	function drawBall(x, y, radius, color) {
		var radian = Math.PI / 180;

		context.beginPath();
		context.strokeStyle = color;
		context.fillStyle = color;
		context.arc(x, y, radius, 0, 360 * radian, false);
		context.stroke();
		context.fill();
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
