const body = document.getElementById("body");
const theme_button = document.getElementById("theme-toggel");

theme_button.addEventListener("click", function(){
    if(body.getAttribute("data-theme") == "dark"){
        body.setAttribute("data-theme", "light");
    }else{
        body.setAttribute("data-theme", "dark");
    }
})