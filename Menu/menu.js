let menuAbrir = document.getElementById("menuAbrir")
let menuFechar = document.getElementById("menuFechar")
let menu = document.getElementById("menu")

menuAbrir.onclick = ()=>{
    menu.style.transform = "translateX(0px)"
    menuAbrir.style.height = "0px";
    menuAbrir.style.padding = "0px";
    setTimeout(() => {
        menuAbrir.style.opacity = 0; 
    }, 650);
}

menuFechar.onclick = ()=>{
    menu.style.transform = "translateX(-400px)"
    menuAbrir.style.height = "40px";
    menuAbrir.style.padding = "5px";
    menuAbrir.style.opacity = 1; 
}

