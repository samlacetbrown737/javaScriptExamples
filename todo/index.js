function addItem() {
	var item = document.createElement("LI");
	var text = document.createTextNode(document.getElementById('newItem').value);
	item.appendChild(text);
	item.onclick = function () {
    	//this.parentElement.removeChild(this);
    	document.getElementById("completed").appendChild(this);
	};
	var list = document.getElementById('items');
	list.insertBefore(item, list.childNodes[0]);
	document.getElementById('newItem').value = "";
}

function setup() {
	document.getElementById("newItem").addEventListener("keyup", function(event) {
	  if (event.keyCode === 13) {
	    event.preventDefault();
	    document.getElementById("addButton").click();
	  }
	});
}