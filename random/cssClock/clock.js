$(document).ready(function() {
	setInterval(updateTime, 500);
});

var updateTime = function() {
	var date = new Date();
	var s = date.getSeconds();
	var m = date.getMinutes();
	var h = date.getHours();
	var sDegrees = (s * 6) + 1;
	var mDegrees = (m * 6) + 1;
	var hDegrees = (h * 30) + 1;
	if(s == 59) {
		$(".second-hand").css({"transition": "none"});
	}
	if(m == 59) {
		$(".minute-hand").css({"transition": "none"});
	}
	if(h == 59) {
		$(".hour-hand").css({"transition": "none"});
	}
	if(s == 1) {
		$(".second-hand").css({"transition": "all 1s linear"});
	}
	if(m == 1) {
		$(".minute-hand").css({"transition": "all 1s linear"});
	}
	if(h == 1) {
		$(".hour-hand").css({"transition": "all 1s linear"});
	}
	rotateHand(sDegrees+180, ".second-hand");
	rotateHand(mDegrees+180, ".minute-hand");
	rotateHand(hDegrees+180, ".hour-hand");
	var isPM = false;
	if(h > 12) {
		isPM = true;
		h = h - 12;
	}
	if(h < 10) {
		h = "0" + h;
	}
	if(m < 10) {
		m = "0" + m;
	}
	if(s < 10) {
		s = "0" + s;
	}
	$(".digital").html("<p id='time'>" + h + ":" + m + ":" + s + "</p>");
}

var rotateHand = function(rot, hand) {
    $(hand).css({"transform": "rotate("+rot+"deg)"});
 };