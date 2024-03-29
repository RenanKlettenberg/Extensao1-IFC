let slide1 = document.getElementById("slide1")
let btns = document.getElementsByClassName("btn")
let posicao = 0;

btns[0].addEventListener("click", () => {
    //Retornar
    if (posicao < 0) {
        posicao += 800;
    }else{
        posicao = -1600;
    }
    slide1.style.marginLeft = posicao + 'px';
})

btns[1].addEventListener("click", () => {
    //Avançar
    if (posicao > -1600) {
        posicao -= 800;
    }else{
        posicao = 0
    }
    slide1.style.marginLeft = posicao + "px";
})