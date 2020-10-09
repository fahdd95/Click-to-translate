///////////////////////////////////////////
      console.log("let's get started");
///////////////////////////////////////////



//////// Block All Body ///////////////////

    console.log("Prevent all elements from being translated");
    document.body.classList.add("notranslate");
    
//////// Block All Body ///////////////////




///////////// Call translation injection //////////////
addclassname();
///////////// Call translation injection //////////////





/////////////  Youtube translation injection //////////////
function addclassname() {
    
try {

    
var youcap = document.getElementsByClassName("caption-window");
    
for(var i = 0 ; i < youcap.length ; i++){
    youcap[i].classList.add("translate");
    console.log("Mission accomplished")
}

}catch(err) {
  console.log("Caption not available.");
}

}
/////////////  Youtube translation injection //////////////