let areasBtn = document.getElementsByClassName("areaBtn")
ajustarTamanho()

function ajustarTamanho() {
    let porcentagemArea = 88000 / innerWidth;
    areasBtn[0].style.width = (100 - porcentagemArea) / 2 - 0.1 + "%";
    areasBtn[1].style.width = (100 - porcentagemArea) / 2 - 0.1 + "%";
}

onresize = ajustarTamanho;

//Mudar páginas
let paginalAtual = 0;
let btnsSlide = document.getElementsByClassName("btnSlide")
let slides = document.getElementsByClassName("slider")
slides[0].style.display = "block";

//--Próxima página
btnsSlide[1].onclick = proximo;
function proximo() {
    slides[paginalAtual].style.transform = "translate(100%)"
    setTimeout(() => {
        slides[paginalAtual].style.display = "none";
        if(slides.length-1 == paginalAtual){
            paginalAtual = 0;
        }else{
            paginalAtual++;
        }
        slides[paginalAtual].style.transform = "translate(-100%)";
        slides[paginalAtual].style.display = "block";
        setTimeout(() => {
           slides[paginalAtual].style.transform = "translate(0%)";
    }, 100);
    }, 650);
}

//--Voltar página
btnsSlide[0].onclick = voltar;
function voltar() {
    slides[paginalAtual].style.transform = "translate(-100%)"
    setTimeout(() => {
        slides[paginalAtual].style.display = "none";
        if(paginalAtual == 0){
            paginalAtual = slides.length-1;
        }else{
            paginalAtual--;
        }
        slides[paginalAtual].style.transform = "translate(100%)";
        slides[paginalAtual].style.display = "block";
        setTimeout(() => {
           slides[paginalAtual].style.transform = "translate(0%)";
    }, 100);
    }, 650);
}

//Automatizar
//setInterval(proximo, 4000);
