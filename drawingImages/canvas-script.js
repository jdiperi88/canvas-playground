//definitions
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

//drawImage(img, dx, dy)
//drawImage(img, dx, dy, dw, dh)
//drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)

var pokemonTile = new Image();
pokemonTile.src = "pokemons.png";
pokemonTile.onload = function() {
	// //pikachu
	// context.drawImage(pokemonTile, 0, 0, 200, 200, 0, 0, 200, 200);

	// //squirtle
	// context.drawImage(pokemonTile, 400, 180, 200, 200, 200, 0, 200, 200);

	// context.drawImage(pokemonTile, 1000, 0, 200, 200, 400, 0, 200, 200);

	context.drawImage(pokemonTile, 0, 0);

	// IMAGE DATA FUNCTIONS
	// -createImageData() creates a new, blank image data object
	// - getImageData() Returns an ImageData object that copies the pixel data for the specifed rectangle on a
	// putImageData() puts the image data (from a specified imageData object) back onto the canvas
	var imageData = context.getImageData(0, 0, 1000, 1000);
	console.log(imageData);

	//R - The color red ( from 0-255)
	//G - The color green ( from 0-255)
	//B - The color blue ( from 0-255)
	//A - The alpha channel ( from 0-255)

	for (var i = 0; i < imageData.data.length; i += 4) {
		imageData.data[i] = 255 - imageData.data[i]; //red
		imageData.data[i + 1] = 205 - imageData.data[i + 1]; //green
		imageData.data[i + 2] = 05 - imageData.data[i + 2]; //blue
		imageData.data[i + 3] = 255; //alpha
	}
	context.putImageData(imageData, 0, 0);

	// save canvas image as data url

	var dataUrl = canvas.toDataURL();
	document.getElementById("canvasImg").src = dataUrl;
};
