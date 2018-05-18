chrome.commands.onCommand.addListener(function(command){
	
	console.log('Command:'+ command);
	var createProps = {};
	chrome.tabs.create(createProps);
	chrome.storage.sync.set({'color': 'test'}, function() {
		console.log('The color is green.');
    });
	alert('You just used a shortcut');
});


chrome.omnibox.onInputChanged.addListener(
  function(text, suggest){
	  console.log('inputChanged: ' + text);
	  suggest([
	    {content: text + " one", description: "the fist one"},
		{content: text + " number two", description: "the second entry"}
	  ]);
  }
);
  
chrome.omnibox.onInputEntered.addListener(
  function(text, disposition){
	console.log('inputEntered: ' + text);
	console.log(disposition);
	alert('You just typed "' + text + '"');
  }
);


function genericInfo(){
	alert('You used a context menu');
}

var contexts = ["page","selection","link","editable","image","video",
                "audio"];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var title = "Test '" + context + "' menu item";
  var contextId = "ID "+context;
  var id = chrome.contextMenus.create({id:contextId,"title": title, "contexts":[context]});//,
                                       //"onclick": genericInfo});
  console.log("'" + context + "' item:" + id);
}
