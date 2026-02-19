document.addEventListener("DOMContentLoaded", function() {
    let track = document.querySelector(".carrusel__list"); 
    let items = document.querySelectorAll(".item"); 
    
    let index = 0; 

    setInterval(function(){
        index++; 
        if (index >= items.length) {
            index = 0;
        }
        let porcentaje = index * -100;
        
        track.style.transform = "translateX(" + porcentaje + "%)";
        
    }, 6000); 
});