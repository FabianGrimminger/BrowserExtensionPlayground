'use strict';


console.log("popup");



let savebtn = document.getElementById('savebutton');
let loadbtn = document.getElementById('loadbutton');

savebtn.onclick = function(element) {
	console.log('save');
	chrome.storage.local.set({'color':'buttonclick'},function(){
		console.log('button sync safe');
	});
}

loadbtn.onclick = function(element){
	console.log('load');
	console.log(element);
	chrome.storage.local.get(['color'], function(result) {
		console.log(result.color);
		document.getElementById('text').innerHTML = result+' '+result.key+' '+result.value;
	});
}