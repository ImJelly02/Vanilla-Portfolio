// Get the loader element by its ID 'loader' and store it in the variable 'loader'
var loader = document.getElementById("loader");
// Set the "load" event to be fully loaded 
window.addEventListener("load", function(){
    // Hide the loader once it stopped loading 
    loader.style.display = "none"
})
