var ulDOM = document.querySelector("#list");
let ullength = document.getElementsByTagName("li");
var crossDOM = document.getElementsByClassName("cross");
var successDOM = document.querySelector(".success");
events();



function newElement(){
	var inp = document.querySelector("#task").value;
	console.log(inp);
	if (inp == " "){
		$("#bosBirakma").toast("show");
	}
	else{
		var txt = document.createTextNode(inp);
		var liDOM = document.createElement("li");
		liDOM.appendChild(txt)
		ulDOM.appendChild(liDOM);
		liDOM.innerHTML	+= "<span class='cross'>&#10060;</span>"
		localStorage.setItem("todo", txt);
		$("#liveToast").toast("show");
		events();
	}
	
}
function events(){
for (var i = 0 ; i < crossDOM.length; i++) {
   crossDOM[i].addEventListener('click' , removeElement);
	
}
}
function removeElement(){
	let parent = event.target.parentNode;
	parent.remove();
	alert("Silindi!");
}


//for (let i = 0; i < ullength.length; i++){
	//console.log("am");