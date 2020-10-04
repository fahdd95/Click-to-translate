///////////////////////////////////////////
      console.log("Let's start");
///////////////////////////////////////////

//////// Block All Body ////////
    document.body.classList.add("notranslate");
    console.log("Body had been blocked");
//////// Block All Body ////////


//////////inject script into html//////////
    Startserv();
    console.log("script had been added");
//////////inject script into html////////// 
 


///////////////////////////////////////////

function Startserv() {
    
console.log("Add translate script to page");
var s = document.createElement('script');
s.src = chrome.runtime.getURL('js/injection.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);
}

 
///////////////////////////////////////////
 

 