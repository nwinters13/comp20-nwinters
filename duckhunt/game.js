function draw()
{
       //gets the canvas and context
	var canvas = document.getElementById('game');
	var ctx = canvas.getContext('2d');

       //gets the spritesheet and calls the function when it is loaded
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

       //sets the duckhunt access
	spriteSheet.src = 'assets/duckhunt.png';
}
