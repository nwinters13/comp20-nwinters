function draw()
{

	var canvas = document.getElementById('game');
	var ctx = canvas.getContext('2d');
//	ctx.fillStyle = "#C96A1B";
//	ctx.fillRect(0,0,800,600);
	var spriteSheet = new Image();
	spriteSheet.addEventListener("load", function() {
       ctx.drawImage(spriteSheet, 0, 270, 80, 130, 20, 60, 200, 400);
       ctx.drawImage(spriteSheet, 0, 700, 900, 200, 0, 300, 800, 300);
    //   ctx.fillStyle = "#C96A1B";
    //   ctx.fillRect(0,600,800,200);
       ctx.drawImage(spriteSheet, 0, 0, 60, 50, 300, 460, 160, 120);
	}, false);
	spriteSheet.src = 'assets/duckhunt.png';


}

/*
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
Given an image, this function takes the area of the source image 
specified by the rectangle whose top-left corner is (sx, sy) and whose width and height are sWidth and sHeight and draws it into the canvas, placing it on the canvas at (dx, dy) and scaling it to the size specified by dWidth and dHeight.

0 270 80 400
*/