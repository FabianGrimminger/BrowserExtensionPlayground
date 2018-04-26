const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1']

function constructOptions(kButtonColors) {
  let div = document.getElementById('buttonDiv'); //missing in docs
  for (let item of kButtonColors) {
    let button = document.createElement('button');
    button.style.backgroundColor = item;
    button.addEventListener('click', function() {
      chrome.storage.sync.set({color: item}, function() {
        console.log('color is ' + item);
      })
    });
    div.appendChild(button); //div not page
  }
}
constructOptions(kButtonColors);