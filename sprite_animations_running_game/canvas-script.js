window.onload = function() {
	//definitions
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

	var isBackgroundLoaded = false;
	var isHeroLoaded = false;
	//background
	var background = new Image();
	background.src = "back.png";
	background.onload = function() {
		isBackgroundLoaded = true;
	};

	//hero
	var hero = new Image();
	hero.src = "sprite.png";
	hero.onload = function() {
		isHeroLoaded = true;
	};

	window.requestAnimationFrame(animationLoop);

	// cell specs
	var cellWidth = 256;
	var cellHeight = 256;
	var currentCell = 0;

	//time specs
	var animationStart = new Date();

	// move specs
	var moveAmount = 5;
	var moveX = 100;

	function animationLoop() {
		var animationNow = new Date();
		if (animationNow - animationStart >= 100) {
			animationStart = animationNow;
			//clear
			context.clearRect(0, 0, canvas.width, canvas.height);

			//update
			currentCell++;
			currentCell %= 6;

			if (moveX >= canvas.width) {
				moveX = -1 * cellWidth;
			} else {
				moveX += moveAmount;
			}

			//draw
			if (isBackgroundLoaded) {
				context.drawImage(background, 0, 0, canvas.width, canvas.height);
			}
			if (isHeroLoaded) {
				context.drawImage(
					hero,
					currentCell * cellWidth,
					0,
					cellWidth,
					cellHeight,
					moveX,
					280,
					100,
					100
				);
			}
		}

		//animate
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
