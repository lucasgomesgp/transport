const home = document.getElementById("home");
const btnToggle = document.getElementById("toggler");
const menuHamburguer = document.getElementById("menu_hamburguer");
let toggle = true;

btnToggle.addEventListener("click", () => {
    if(toggle){
        menuHamburguer.style.display = "initial";
        home.style.marginTop = "12rem";
    }else{
        menuHamburguer.style.display = "none";
        home.style.marginTop = "4rem";
    }
    toggle = !toggle; 
});