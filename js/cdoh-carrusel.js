document.addEventListener("DOMContentLoaded", function() {
    
    let track2 = document.querySelector(".cdoh__list"); 

    let items2 = document.querySelectorAll(".cdoh__item"); 
    
    let index2 = 0; 


    setInterval(function(){
        index2++; 


        if (index2 >= items2.length) {
            index2 = 0;
        }

        let porcentaje = index2 * -100;

        track2.style.transform = "translateX(" + porcentaje + "%)";
        
    }, 6000);
});