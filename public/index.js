const body = document.getElementById("body");
const theme_button = document.getElementById("theme-toggel");
const menu_button = document.getElementById("menu-open");
const close_button = document.getElementById("menu-close");
const header = document.getElementById("header");

theme_button.addEventListener("click", function(){
    if(body.getAttribute("data-theme") == "dark"){
        body.setAttribute("data-theme", "light");
    }else{
        body.setAttribute("data-theme", "dark");
    }
})

menu_button.addEventListener("click", function(){
        header.setAttribute("data-visibility", "true");
})

close_button.addEventListener("click", function(){
    header.setAttribute("data-visibility", "false");
})