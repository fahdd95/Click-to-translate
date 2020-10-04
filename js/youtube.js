///////////////////////////////////////////
      console.log("Let's start");
///////////////////////////////////////////

//////// Block All Body ///////////////////
    document.body.classList.add("notranslate");
    console.log("Body had been blocked");
//////// Block All Body ///////////////////

addclassname();


///////////// Search for element and add translate order //////////////
function addclassname() {
    
try {
var youcap = document.getElementById("caption-window-1");
//var youcap = document.getElementsByClassName("caption-window");
  youcap.classList.add("translate");
}
catch(err) {
  console.log("no caption text");
}

    
    
 }