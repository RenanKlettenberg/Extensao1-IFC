let modo = "claro";
let botao = document.getElementById("switch");
let bola = document.getElementById("bola")

botao.onclick = ()=>{
    trocarModos();
};

function trocarModos() {
    if (modo == "claro") {
        modo = "escuro";
        bola.style.transform = "translateX(30px)"
        document.documentElement.style.setProperty('--branco', "#0a0a0a")
        document.documentElement.style.setProperty('--cinzaClaro', "black")
        document.documentElement.style.setProperty('--cinza', "greenyellow")
        document.documentElement.style.setProperty('--texto', "white")
    }else{
        modo = "claro";
        bola.style.transform = "translateX(0px)"
        document.documentElement.style.setProperty('--branco', "white")
        document.documentElement.style.setProperty('--cinzaClaro', "antiquewhite")
        document.documentElement.style.setProperty('--cinza', "lightgray")
        document.documentElement.style.setProperty('--texto', "black")
    }

}

