///////////// Start the translation service /////////////
let StartTrans = document.getElementById('StartTrans');
   StartTrans.onclick = function() {
   chrome.extension.sendMessage({command:"start"});
   chrome.tabs.executeScript({
          file: '/js/excute.js'
        });
 
       window.close();
  };
///////////// Start the translation service /////////////


 
/////////////  YouTube caption translation //////////////
let DefYouTube = document.getElementById('DefYouTube');
   DefYouTube.onclick = function() {
   chrome.tabs.executeScript({
          file: '/js/DefTyoutube.js'
        });
        
        window.close();
       
  };
/////////////  YouTube caption translation //////////////




/////////////  Youtube translation injection //////////////
let YouTube = document.getElementById('YouTube');
   YouTube.onclick = function() {
   chrome.tabs.executeScript({
          file: '/js/youtube.js'
        });
        window.close();
       
  };
/////////////  Youtube translation injection //////////////




/////////////  Youtube translation injection //////////////
function DefConfig() {
        chrome.storage.sync.get(['storageSelectedLang'], function (settings) {
        document.getElementById('SelectedLang').value = settings.storageSelectedLang;
     
    });
}
/////////////  Youtube translation injection //////////////


chrome.storage.onChanged.addListener(function(changes, namespace) {
    DefConfig();
});

 

document.getElementById('SelectedLang').onchange = function() {
    var language = this.selectedIndex ? this.options[this.selectedIndex].value : 'nl';
    chrome.storage.sync.set({'storageSelectedLang': language}, function () {});
};


DefConfig();

