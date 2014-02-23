function draw()
{

	var canvas = document.getElementById('game');
	var ctx = canvas.getContext('2d');

	var spriteSheet = new Image();
	spriteSheet.addEventListener("load", function() {
       ctx.drawImage(spriteSheet, 0, 270, 80, 130, 20, 60, 200, 400);
       ctx.drawImage(spriteSheet, 0, 700, 900, 200, 0, 300, 800, 300);

       ctx.drawImage(spriteSheet, 0, 0, 60, 50, 300, 460, 160, 120);

       ctx.drawImage(spriteSheet, 250, 110, 45, 40, 500, 100, 100, 100);
       ctx.drawImage(spriteSheet, 128, 153, 40, 35, 300, 200, 100, 100);
       ctx.drawImage(spriteSheet, 80, 153, 40, 35, 280, 100, 100, 100);
       ctx.drawImage(spriteSheet, 336, 195, 38, 35, 420, 225, 100, 100);
       ctx.drawImage(spriteSheet, 38, 116, 40, 35, 10, 10, 100, 100);

	}, false);
	spriteSheet.src = 'assets/duckhunt.png';


}

/*
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
Given an image, this function takes the area of the source image 
specified by the rectangle whose top-left corner is (sx, sy) and whose width and height are sWidth and sHeight and draws it into the canvas, placing it on the canvas at (dx, dy) and scaling it to the size specified by dWidth and dHeight.

250 110 45 40
*/