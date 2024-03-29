let lista = ["Maria", "Miguel", "Ana", "João", "Sofia", "Lucas", "Beatriz", "Pedro", "Gabriela", "Um cara", "Mais outro cara"]

let input = document.getElementById("search")
let pesquisa = document.getElementById("pesquisas")
let listaItens = document.getElementById("listaItens")

input.addEventListener("input", verificarLista)

function verificarLista() {
    listaItens.innerHTML = "";
    pesquisa.style.display = "block";
    if (input.value != "") {
        lista.filter((item) => item.toLowerCase().includes(input.value.toLowerCase()))
            .forEach((item) => {
                addItem(item)
            })
    }
    if (listaItens.innerHTML == "") {
        pesquisa.style.display = "none";
    } else {
        pesquisa.style.display = "block";
    }
}

function addItem(item) {
    listaItens.innerHTML += "<li onclick=\"setarValor(this.innerText)\">" + item + "</li>"
}

//Setar valor item
function setarValor(texto) {
    listaItens.innerHTML = "";
    pesquisa.style.display = "none";
    input.value = texto;
}

//Pesquisar
input.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        alert("Pesquisando por " + input.value + "...")
    }
})
