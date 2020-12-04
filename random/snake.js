function Snake(alive, length, direction, x, y) {
	this.alive = alive;
	this.length = length;
	this.direction = direction;
	this.x = x;
	this.y = y;
	this.howLong = function() {
		return this.length;
	}
	this.living = function() {
		return this.alive;
	}
	this.xCoord = function() {
		return this.y;
	}
	this.yCoord = function() {
		return this.x;
	}
	this.going = function() {
		return this.direction;
	}
	this.status = function() {
		return this.alive + " " + this.length + " " this.direction + " " + this.x + " " + this.y;
	}
}

function newSnake(x,y) {
	var snakeOne = new Snake(true, 3, "up", x, y);
	console.log(snakeOne.status());
}

function newApple(x,y) {
	//
}

function startGame() {
	grid = [10][10];
	min = Math.ceil(1);
  	max = Math.floor(10);
 	snakeX = Math.floor(Math.random() * (max - min)) + min;
 	snakeY = Math.floor(Math.random() * (max - min)) + min;
	newSnake(snakeX, snakeY);
	appleX = Math.floor(Math.random() * (max - min)) + min;
 	appleY = Math.floor(Math.random() * (max - min)) + min;
	newApple(appleX, appleY);
document.addEventListener('keydown', press);
function press(e) {
		 if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */) {
		    if(snakeOne.direction != "s") {
		        snakeOne.direction = "n";
		 	}
		 }
		 if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */) {
		     if(snakeOne.direction != "e") {	
		     	snakeOne.direction = "w";
		     }
		 }
		 if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */) {
		     if(snakeOne.direction != "n") {	
		     	snakeOne.direction = "s";
		     }
		 }
		 if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */) {
		     if(snakeOne.direction != "w") {	
		     	snakeOne.direction = "e";
		     }
		 }	  
	}
}