// Start Translate Service
let StartTrans = document.getElementById('StartTrans');
   StartTrans.onclick = function() {
   chrome.tabs.executeScript({
          file: '/js/excute.js'
        });
  };
 
 
// Add translate to YouTube 
let YouTube = document.getElementById('YouTube');
   YouTube.onclick = function() {
   chrome.tabs.executeScript({
          file: '/js/youtube.js'
        });
       
  };
 
