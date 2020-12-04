var number = 0;
setupNumbers();

function callback(e) {
    var e = window.e || e;
    if (e.target.tagName !== 'BUTTON') {
        return;
    }
    guessed(parseInt(e.target.innerHTML));
}

if (document.addEventListener) {
    document.addEventListener('click', callback, false);
}
else {
    document.attachEvent('onclick', callback);
}

function setupNumbers() {
	number = Math.floor(Math.random() * 101);
	console.log(number);
	for(var i = 1; i < 101; i++) {
		var btn = document.createElement("button");
		btn.innerHTML = i;
		btn.setAttribute('class', 'possible')
		document.body.appendChild(btn);
	}
}

function guessed(num) {
	if (num > number) {
		guessedHigh(num);
	} else if (num < number) {
		guessedLow(num);
	} else if (num == number) {
		correct()
	}
}

function guessedLow(num) {
	var buttons = document.getElementsByTagName('BUTTON');
	for(var i = 0; i < buttons.length; i++) {
		if(buttons[i].classList.contains('possible')) {
			if(parseInt(buttons[i].innerHTML) <= num) {
				buttons[i].classList.remove('possible')
				buttons[i].classList.add('no')
			}
		}
	}
}

function guessedHigh(num) {
	var buttons = document.getElementsByTagName('BUTTON');
	for(var i = 0; i < buttons.length; i++) {
		if(buttons[i].classList.contains('possible')) {
			if(parseInt(buttons[i].innerHTML) >= num) {
				buttons[i].classList.remove('possible')
				buttons[i].classList.add('no')
			}
		}
	}
}

function correct() {
	alert('yay');
	var buttons = document.getElementsByTagName('BUTTON');
	for(var i = 0; i < buttons.length; i++) {
		buttons[i].remove();
		i--;
	}
	setupNumbers();
}