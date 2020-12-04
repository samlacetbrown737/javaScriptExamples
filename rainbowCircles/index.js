var circles = [] //[x, y, radius, hue, alpha]
var canvas;
var ctx;
//document.addEventListener('click', newCircle);
var circleCreater;
var interval;

function draw() {
	canvas = document.getElementById('circleCanvas');
	ctx = canvas.getContext('2d');
	interval = setInterval(update, 25);
	circleCreater = setInterval(newCircle, 200)
}


function update(){
	ctx.clearRect(0, 0, 10000, 10000);
	for(var i = 0; i<circles.length; i++) {
		//circles[i][2] = circles[i][2] + 0.5;
		circles[i][2] = circles[i][2] + 2;
		if(circles[i][2] > 200) {
			//circles[i][4] = circles[i][4] - 0.005;
			circles[i][4] = circles[i][4] - 0.01;
			if(circles[i][4] < 0.01) {
				circles.splice(i, 1);
				i--;
			} else {
				biggerCircle(circles[i][0], circles[i][1], circles[i][2], circles[i][3], circles[i][4]);
			}
		} else {
			biggerCircle(circles[i][0], circles[i][1], circles[i][2], circles[i][3], circles[i][4]);
		}
	}
}

function biggerCircle(x,y,radius,hue,alpha) {
	ctx.fillStyle = "hsla(" + hue + ",70%,70%,"+alpha+")";
	ctx.strokeStyle = "hsla(" + hue + ",70%,70%,"+alpha+")";
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2);
	ctx.fill();
}

/*function newCircle(event){
	var hue = randomHue();
	var x = event.clientX;
	var y = event.clientY;
	circles.push([x,y,10,hue,0.9]);
}*/

function newCircle(event){
	var hue = randomHue();
	var x = 2000 * Math.random();
	var y = 1000 * Math.random();
	circles.push([x,y,10,hue,0.9]);
}

function randomHue() {
	return 360 * Math.random();
}
