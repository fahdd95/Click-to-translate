///////////////////////////////////////////
      console.log("let's get started");
///////////////////////////////////////////

///////////////////////////////////////////
     window.alert("Inject translate appility into caption");
///////////////////////////////////////////



//Detect YouTube caption classes 
document.addEventListener("DOMNodeInserted", function (event) {
    var ele = event.target;
    console.log(ele.classList);
    for (var n = 0 ; n < ele.classList.length ; n++ ){ 
    try{ 
    if (ele.classList[n] == "caption-window") { 
        
        
        
    ele.classList.add("translate");
        
    //Refresh
    try{
    console.log("Updating");
    var iframe = document.getElementById(":0.container");
    var btn = iframe.contentWindow.document.getElementById(":0.confirm");
    btn.click();
    console.log("Updated");
    }catch(err){console.log("Update failed");};
    //Refresh
        
        
        
    };      
    }catch(err) {
    console.log("Error.");
    };    
    };
    

     
}, false);