let inspectButton = document.getElementById('inspectRequest');
let content = document.getElementById('space');

let url = "<all_urls>";

let addKeyValue = function(key, value){
	content.innerHTML += '<p>'+key+":\t\t"+value+"\n</p>";	
}

let callback = function(details){
	  content.innerHTML = "";
	  for(key in details){
		  if(key !=  'requestHeaders'){
			addKeyValue(key, details[key]);
		  }else{
			  for(header_key in details[key]){
			  addKeyValue(header_key, details[key][header_key]['name']+': '+details[key][header_key]['value']);
			  }
		  }
	  }
	  //addKeyValue("RequestId", details['requestId']);
	  //addKeyValue("URL", details[)
	  console.log(details);
	};
	
let urls = {urls: [url]};
let options = ["requestHeaders"];


inspectButton.onclick = function(element) {

	chrome.tabs.getSelected(null, function (tabs) {
		console.log(tabs);
		url = tabs['url']
		urls = {urls: [url]};
		
		chrome.webRequest.onBeforeSendHeaders.removeListener(callback);
		console.log(urls);
		chrome.webRequest.onBeforeSendHeaders.addListener(callback, urls, options);
	
		chrome.tabs.reload();
	});
	
	
	
	
};