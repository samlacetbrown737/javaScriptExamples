var inputtedName = false;
var name = "";
function hello() {
	if(inputtedName == false){
		name = prompt("What's your name?");
		if(name != "") {
			inputtedName = true;
		}
		while(!inputtedName) {
			name = prompt("Please input your name: ");
			if(name != "") {
				inputtedName = true;
			}
		}
		alert("Hello, " + name + "!");
	} else {
		var responses = ['You again?', 'Hi, ' + name + '.', 'Hello, ' + name + '.', 'What are you still doing here?', 'Can I help you?', "Don't you have better things to do?", "Leave me alone!", "What now?", "Well, hello again, " + name + ".", "Yes?"];
		var random = Math.floor(Math.random() * (responses.length));
		console.log(random);
		alert(responses[random]);
	}
}

document.getElementById("helloButton").onmouseover = function() {
	document.body.style.backgroundColor = "#cdd0d1";
}

document.getElementById("helloButton").onmouseout = function() {
	document.body.style.backgroundColor = "#e1e8eb";
}