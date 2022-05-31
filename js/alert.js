"use strict"

const button = document.getElementById("button");
const formP = document.getElementById("formP");
const cerrarForm1 = document.getElementById("cerrarForm1"); 
const cerrarForm2 = document.getElementById("cerrarForm2"); 
const flex = document.getElementById("flex");

button.addEventListener("click", function(){
    formP.classList.remove("form-hidden");
    formP.classList.add("form-visible");
    flex.classList.remove("flex-hidden");
    flex.classList.add("flex-visible");
    
  
});

cerrarForm1.addEventListener("click", function(){
    formP.classList.add("form-hidden");
    formP.classList.remove("form-visible");
    flex.classList.add("flex-hidden");
    flex.classList.remove("flex-visible");
}); 
cerrarForm2.addEventListener("click", function(){
    formP.classList.add("form-hidden");
    formP.classList.remove("form-visible");
    flex.classList.add("flex-hidden");
    flex.classList.remove("flex-visible");
});
 