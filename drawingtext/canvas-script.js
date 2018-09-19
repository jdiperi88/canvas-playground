window.onload = () => {
	//definitions
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

	//drawImage(img, dx, dy)
	//drawImage(img, dx, dy, dw, dh)
	//drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)

	var pokemonTile = newImage();
	pokemonTile.src = "pokemons.png";
	pokemonTile.onload = function() {
		context.drawImage(pokemonTile, 40, 40);
	};
};
window.onload = function() {
	// Definitions
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var lightCellColor = "#ddb180";
	var darkCellColor = "#7c330c";
	var fillColor;
	// rectangle
	//context.rect(xcoord,ycoord,width, height)
	context.strokeStyle = "black";
	context.strokeRect(250, 100, 400, 400);
	function row(x, y, start, finish) {
		for (var i = 0; i < 8; i++) {
			if (i % 2 === 0) {
				context.fillStyle = start;
			} else {
				context.fillStyle = finish;
			}
			context.fillRect(x, y, 50, 50);
			x += 50;
		}
	}
	row(250, 100, lightCellColor, darkCellColor);
	row(250, 150, darkCellColor, lightCellColor);
	row(250, 200, lightCellColor, darkCellColor);
	row(250, 250, darkCellColor, lightCellColor);
	row(250, 300, lightCellColor, darkCellColor);
	row(250, 350, darkCellColor, lightCellColor);
	row(250, 400, lightCellColor, darkCellColor);
	row(250, 450, darkCellColor, lightCellColor);
	// //cell 1
	// context.fillStyle = lightCellColor;
	// context.fillRect(250, 100, 50, 50);
};
