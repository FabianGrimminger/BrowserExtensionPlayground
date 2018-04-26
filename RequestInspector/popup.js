let inspectButton = document.getElementById('inspectRequest');
let content = document.getElementById('space');

inspectButton.onclick = function(element) {
	console.log("clicked");
};

let addKeyValue = function(key, value){
	content.innerHTML += key+":\t\t"+value+"\n";	
}

chrome.webRequest.onBeforeRequest.addListener(
  function(details){
	  content.innerHTML = "";
	  addKeyValue("RequestId", details['requestId']);
	  console.log(details);
  },
  {urls: ["<all_urls>"]},
  ["requestBody"]);
