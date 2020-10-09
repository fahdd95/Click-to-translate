///////////// Start the translation service /////////////
let StartTrans = document.getElementById('StartTrans');
   StartTrans.onclick = function() {
   chrome.tabs.executeScript({
          file: '/js/excute.js'
        });
  };
///////////// Start the translation service /////////////
 





/////////////  Youtube translation injection //////////////
let YouTube = document.getElementById('YouTube');
   YouTube.onclick = function() {
   chrome.tabs.executeScript({
          file: '/js/youtube.js'
        });
       
  };
/////////////  Youtube translation injection //////////////