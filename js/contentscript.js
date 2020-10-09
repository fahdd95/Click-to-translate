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

 
//////// listen to the left click ////////
document.addEventListener("mousedown", function(event){
    var translatecl = false;
    //right click
    if (event.button != 0){return;};
    if (keyisdown != true){return;};
   
    
    var el = event.target;
 
    for (var n = 0 ; n < el.classList.length ; n++ ){ 
        
    try{ 

   console.log( el.classList[n]);
   
    if (el.classList[n] == "translate") { 
    el.classList.remove("translate");
    translatecl = true;
    window.alert("Orginal Language");
    };
        
    }catch(err) {
    console.log("Error.");
    };
    };
    
    if (translatecl == false) { 
    el.classList.add("translate");
    window.alert("Translated Language");
    };
   
 }, true); 





