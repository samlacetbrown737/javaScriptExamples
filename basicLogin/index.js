var failedAttempts = 0;
var failed = false;
var inputs = document.getElementsByTagName('input')
var user = "unknown";
var users = [['samthedictator', 'nala', 'Sam'], ['username', 'password', 'First Name']]

document.getElementById('passwordInput').onkeypress = function(event){
    if (event.keyCode == 13 || event.which == 13){
        validate();
    }
};

function validate() {
	if(!failed) {
		var username = document.getElementById('usernameInput').value;
		var password = document.getElementById('passwordInput').value;
		if(username != "" && username != null) {
			if(password != "" && password != null) {
				for(var i = 0; i < users.length; i++) {
					if(username == users[i][0] && password == users[i][1]) {
						user = users[i][2];
						login(user);
					}
				}
				if(user == "unknown") {
					inputs[0].style.backgroundColor = "#e68181";
    				inputs[1].style.backgroundColor = "#e68181";
    				var tid = setTimeout(function(){
        				inputs[0].style.backgroundColor = "#c4f3ff";
    					inputs[1].style.backgroundColor = "#c4f3ff";
    					document.getElementById('usernameInput').value = '';
						document.getElementById('passwordInput').value = '';
   					},300);
   					
					failedAttempts++;
					if(failedAttempts >= 3) {
						failedWait();
					}
				}
			} else {
				alert('need password');
			}
		} else {
			alert('need username')
		}
	}
}

function login(name) {
	document.getElementById('welcomeMessage').innerHTML = "Welcome, " + name + "!";
	document.getElementById('welcomeMessage').style.display = 'block';
	setTimeout(function(){
        window.location.href = "file:///Users/samthedictator/Documents/Code/Graham/examples/basicLogin/success.html";
   },5000);
}

async function delay(delayInMs) {
    return new Promise(resolve  => {
        setTimeout(() => {
          	resolve(2);
        }, delayInMs);
    });
}

async function failedWait() {
    failed = true;
    document.getElementById("loginButton").style.backgroundColor = "#c3c8c9";
    inputs[0].style.backgroundColor = "#e68181";
    inputs[1].style.backgroundColor = "#e68181";
    alert('Must wait 30 seconds to try again.');
	let delayres = await delay(30000);
	document.getElementById("loginButton").style.backgroundColor = "#1eb5e3";
	inputs[0].style.backgroundColor = "#c4f3ff";
    inputs[1].style.backgroundColor = "#c4f3ff";
	failed = false;
	failedAttempts = 0;
}