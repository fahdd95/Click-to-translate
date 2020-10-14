let keyisdown = false;   // Switch

//////// listen to the Ctrl Key ////////
document.addEventListener('keydown', function(event){
    //console.log(event.key);
    //right click
    if (event.key != 'Control') {
    return;
    };
    
    keyisdown = true;
    
     setTimeout( function() {
        keyisdown = false ;
      }, 450 ) ;     
 
 }, true);
//////// listen to the Ctrl Key ////////
 
//////// listen to the left click ////////
document.addEventListener("mousedown", function(event){
    var translatecl = false;
    //right click
    if (event.button != 0){return;};
    if (keyisdown != true){return;};
   
    
    var el = event.target;
    var parel = el.parentElement;
    var parparel = parel.parentElement;
    //console.log(parparel);

    // In Normal DIV
    for (var n = 0 ; n < el.classList.length ; n++ ){ 
        
    try{ 

    //console.log( el.classList[n]);
   
    if (el.classList[n] == "translate") { 
    el.classList.remove("translate");
    translatecl = true;
    window.alert("Orginal Language");
    };
        
    }catch(err) {
    console.log("Error.");
    };
    };
    // In Normal DIV
    
    // In Translated DIV
    for (var n = 0 ; n < parparel.classList.length ; n++ ){ 
        
    try{ 

    //console.log( parparel.classList[n]);
   
    if (parparel.classList[n] == "translate") { 
    parparel.classList.remove("translate");
    translatecl = true;
    window.alert("Orginal Language");
    };
        
    }catch(err) {
    console.log("Error.");
    };
    };
    // In Translated DIV

    
    if (translatecl == false) { 
    el.classList.add("translate");
    window.alert("Translated Language");
    };
    
    
    
    
    //Refresh
    try{
    console.log("Updating");
    var iframe = document.getElementById(":0.container");
    var btn = iframe.contentWindow.document.getElementById(":0.confirm");
    btn.click();
    console.log("Updated");
    }catch(err){console.log("Update failed");};
    //Refresh
    
    
    
 }, true); 
//////// listen to the left click ////////




