// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeColor = document.getElementById('changeColor');

console.log(changeColor);

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
	console.log("onclick");
  let color = element.target.value;
    chrome.tabs.executeScript(
        chrome.tabs[0],//tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
};
