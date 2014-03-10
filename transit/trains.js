
function createUpdates(){
	var currentDate = new Date();
	var newP = document.createElement("p");
	var parentElement= document.getElementById('status');
	var theFirstChild = parentElement.firstChild;
	var msg = document.getElementById("msg").value;
	newP.innerHTML = currentDate.getMonth() + "/" + currentDate.getDay() + "/" + currentDate.getFullYear() + " " + (currentDate.getUTCHours() + 5) + ":" + currentDate.getMinutes() + " - " + msg;
	parentElement.insertBefore(newP, theFirstChild);
	document.getElementById("msg").value = "";
}


function createUpdates(){
	var currentDate = new Date();
	var newP = document.createElement("p");
	var parentElement= document.getElementById('status');
	var theFirstChild = parentElement.firstChild;
	var msg = document.getElementById("msg").value;
	newP.innerHTML = currentDate.getMonth() + "/" + currentDate.getDay() + "/" + currentDate.getFullYear() + " " + (currentDate.getUTCHours() + 5) + ":" + currentDate.getMinutes() + " - " + msg;
	parentElement.insertBefore(newP, theFirstChild);
	document.getElementById("msg").value = "";
}
