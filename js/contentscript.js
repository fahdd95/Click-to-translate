let keyisdown = false;   // Switch

//////// listen to the Alt Key ////////
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


//////// listen to the right click ////////
document.addEventListener("mousedown", function(event){
  
    //right click
    if (event.button != 0){return;};
    if (keyisdown != true){return;};

    //////// Allow Selected Element ////////
    var el = event.target;
    el.classList.add("translate");
    //////// Allow Selected Element ///////
    
 
 }, true); 


 

//////// listen to the right click ////////
document.addEventListener("mousedown", function(event){
  
    //right click
    if (event.button != 2){return;};
    if (keyisdown != true){return;};

    //////// Allow Selected Element ////////
    var el = event.target;
    el.classList.remove("translate");
    //////// Allow Selected Element ///////
     
 
 }, true); 





