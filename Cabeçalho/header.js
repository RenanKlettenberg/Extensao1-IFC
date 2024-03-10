let header = document.getElementsByTagName("header")[0];
let ultimaPosicao = 0;
let opacidade = 3;
header.style.opacity = opacidade;

onscroll = ()=>{
    let posicaoAtual = scrollY;
    if(posicaoAtual > ultimaPosicao){
        //Scroll para baixo
        if (header.style.opacity <= 0) {
            //Não pode executar
        }else{
            opacidade-= 0.25;
        }
    }else{
        //Scroll para cima
        if (header.style.opacity >= 1) {
            //Não pode executar
            opacidade = 2.5;
        }else{
            opacidade+=0.25;
        }
    }
    header.style.opacity = opacidade;
    ultimaPosicao = posicaoAtual;
}