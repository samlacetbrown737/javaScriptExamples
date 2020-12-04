//sound vars
	var clap = new Audio("drumMachine/sounds/clap.wav");
	var hihat = new Audio("drumMachine/sounds/hihat.wav");
	var kick = new Audio("drumMachine/sounds/kick.wav");
	var openhat = new Audio("drumMachine/sounds/openhat.wav");
	var boom = new Audio("drumMachine/sounds/boom.wav");
	var ride = new Audio("drumMachine/sounds/ride.wav");
	var snare = new Audio("drumMachine/sounds/snare.wav");
	var tom = new Audio("drumMachine/sounds/tom.wav");
	var tink = new Audio("drumMachine/sounds/tink.wav");
	var clapPlay = false;
	var hihatPlay = false;
	var kickPlay = false;
	var openhatPlay = false;
	var boomPlay = false;
	var ridePlay = false;
	var snarePlay = false;
	var tomPlay = false;
	var tinkPlay = false;
	var playing = setInterval(playSounds, 1000);

$(document).ready(function() {
	$(function(){
	    $(document).on('keypress', function(event){
	        switch (event.which) {
	            case 97:
	                toggleClap();
	                break;
	            case 115:
	            	toggleHihat();
	                break;
	            case 100:
	                toggleKick();
	                break;
	            case 102:
	                toggleOpenhat();
	                break;
	            case 103:
	                toggleBoom();
	                break;
	            case 104:
	                toggleRide();
	                break;
	            case 106:
	                toggleSnare();
	                break;
	            case 107:
	                toggleTom();
	                break;
	            case 108:
	                toggleTink();
	                break;
	        }
	    });
	});

	$("#bpm").click(function() {
		var bpm = prompt("Speed?");
		clearInterval(playing);
		playing = setInterval(playSounds, (bpm*200));
	}); 

	$(".more").click(function() {
		if(($(".more-menu").css("opacity")) == 0) {
			$(".more-menu").css("opacity", 1);
			$(".more-dot").css("background-color", "white");
		}
		if(($(".more-menu").css("opacity")) == 1) {
			$(".more-menu").css("opacity", 0);
			$(".more-dot").css("background-color", "black");
		}
	});
	$(document).click(function(event) { 
	  	$target = $(event.target);
		if(!$target.closest('.more-menu').length && ($(".more-menu").css("opacity") == 1)) {
		    $(".more-menu").css("opacity", 0);
			$(".more-dot").css("background-color", "black");
		}        
	});
});

function playSounds() {
	if(clapPlay == true) {
		clap.play();
	} else if (clapPlay == false) {
		clap.pause();
	}

	if(hihatPlay == true) {
		hihat.play();
	} else if (hihatPlay == false) {
		hihat.pause();
	}

	if(kickPlay == true) {
		kick.play();
	} else if (kickPlay == false) {
		kick.pause();
	}

	if(openhatPlay == true) {
		openhat.play();
	} else if (openhatPlay == false) {
		openhat.pause();
	}

	if(boomPlay == true) {
		boom.play();
	} else if (boomPlay == false) {
		boom.pause();
	}

	if(ridePlay == true) {
		ride.play();
	} else if (ridePlay == false) {
		ride.pause();
	}

	if(snarePlay == true) {
		snare.play();
	} else if (snarePlay == false) {
		snare.pause();
	}

	if(tomPlay == true) {
		tom.play();
	} else if (tomPlay == false) {
		tom.pause();
	}

	if(tinkPlay == true) {
		tink.play();
	} else if (tinkPlay == false) {
		tink.pause();
	}
}

//toggles
	function toggleClap() {
		clapPlay = (!clapPlay);
		$("#a").toggleClass("on");
	}

	function toggleHihat() {
		hihatPlay = (!hihatPlay);
		$("#s").toggleClass("on");
	}

	function toggleKick() {
		kickPlay = (!kickPlay);
		$("#d").toggleClass("on");
	}

	function toggleOpenhat() {
		openhatPlay = (!openhatPlay);
		$("#f").toggleClass("on");
	}

	function toggleBoom() {
		boomPlay = (!boomPlay);
		$("#g").toggleClass("on");
	}

	function toggleRide() {
		ridePlay = (!ridePlay);
		$("#h").toggleClass("on");
	}

	function toggleSnare() {
		snarePlay = (!snarePlay);
		$("#j").toggleClass("on");
	}

	function toggleTom() {
		tomPlay = (!tomPlay);
		$("#k").toggleClass("on");
	}

	function toggleTink() {
		tinkPlay = (!tinkPlay);
		$("#l").toggleClass("on");	
	}