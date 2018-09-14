window.onload = () => {
	//definitions
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	// context.font = "45px verdana";
	// // shadow attributes on canvas
	// // context.fillText(text,xCoord,YCoord,maxwidth)
	// var fText = "fill text on canvas";
	// context.fillText(fText, 80, 100);

	// // context.strokeText(text,xcoord,ycoord,maxwidth)
	// var sText = "stroke text on canvas";
	// context.strokeText(sText, 80, 200);

	//canvas text cheatsheet
	// context.font = "font-style font-weight font-size font-family";

	// font-style:
	// - normal (the default)
	// - italic
	// - oblique
	// - inherit (style comes from the parent element)

	// font-weight:
	// - normal (the default)
	// - bold
	// - bolder
	// - lighter
	// - 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
	// - inherit (style comes from the parent element)

	// font-size:
	// - xx-small | x-small | small | smaller | medium | large | larger | x-large | xx-large
	// - exact number in px (pixels), pt (points) or em (ems)
	// - inherit;

	// font-family:
	// - family-name (like "times", "courier", "arial", ...)
	// - generic-family (like "serif", "sans-serif", "cursive", "fantasy", "monospace", ...)
	// - inherit (style comes from the parent element)

	// var text = "This text will be styled!";

	// context.font = "normal 800 xx-large times"; // fillText Style

	// context.fillText(text, 100, 400);

	// context.font = "italic 400 48px monospace"; // strokeText Style

	// context.strokeText(text, 100, 450);

	// context.font = "- - - -";

	function draw3DText(text, x, y, style, color, size, shadow) {
		context.font = style;
		context.fillStyle = shadow;

		for (var i = 0; i < size; i++) {
			context.fillText(text, x - i, y - i);
		}

		context.fillStyle = color;
		context.fillText(text, x, y);
	}

	draw3DText(
		"Joey",
		300,
		300,
		"normal 600 54px monospace",
		"blue",
		20,
		"black"
	);
};
