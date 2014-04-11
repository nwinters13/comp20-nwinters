Nate: Nate Winters
Date: 4/10/2014
Assignment 4: 2048 Game Center

Time Spent: 12 Hours


At this point is seems that everything has been correctly implemented.
	I have correctly used Mongo, Node.js, and Express to create
	a /submit.json api, a /scores.json, and a / webpage. These have
	all worked and been implemented.

When I play a 2048 game the data is sent to my mongolabs server on 
 Heroku, and then if they request the /scores.json webpage the data
 is displayed in JSON format. If they request the / page then the
 information is displayed in a basic html format of a table that
 does not show them their grid.

Thanks to:
	Kevin Ligonde
	Emma Posamentier
	Nolan Karp--something?
	Sam Ballerini
	Tiffani Lau
	Kenny Crowell

The Grid:
	The grid is stored in the 2048 game as its own object that is
	created as a prototype this.grid that is initialized within 
	grid.js
The Score:
	The score is initialized and stored within the game_manager.js
	file. It is just a var that is a member of the game_manager.

Modifications:
	The only modification that needed to be made was making a jquery post
	within the game_manager file. To do this, a script tag needed to be
	added in index.js, but the only real coding was done within 
	game_manager.js. The jquery post involved sending information to
	the heroku address if tthe game was over (this.over)

game_manager.js:
	$.post("http://young-mountain-1326.herokuapp.com/submit.json", {
      username: "nwinte01",
      score: this.score,
      grid: JSON.stringify(this.grid),
    });

index.html:
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>