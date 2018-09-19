window.onload = () => {
	//definitions
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

	//drawImage(img, dx, dy)
	//drawImage(img, dx, dy, dw, dh)
	//drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)

	var pokemonTile = new Image();
	pokemonTile.src = "pokemons.png";
	pokemonTile.onload = function() {
		//pikachu
		context.drawImage(pokemonTile, 0, 0, 200, 200, 0, 0, 200, 200);

		//squirtle
		context.drawImage(pokemonTile, 400, 180, 200, 200, 200, 0, 200, 200);

		context.drawImage(pokemonTile, 1000, 0, 200, 200, 400, 0, 200, 200);
	};
};
