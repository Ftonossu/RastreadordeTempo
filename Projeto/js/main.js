//variaveis seleção
let diario = document.querySelector(".diario");
let semanal = document.querySelector(".semanal");
let mensal = document.querySelector(".mensal");
//variaveis lista de tempo
let rastreadorDiario = document.querySelectorAll(".rastreador-tempo-diario")
let rastreadorSemanal = document.querySelectorAll(".rastreador-tempo-semanal")
let rastreadorMensal = document.querySelectorAll(".rastreador-tempo-mensal")
let anteriorDiario = document.querySelectorAll(".rastreador-anterior-diario")
let anteriorSemanal = document.querySelectorAll(".rastreador-anterior-semanal")
let anteriorMensal = document.querySelectorAll(".rastreador-anterior-mensal")
//eventos de click
diario.addEventListener("click", ativaDiario);
semanal.addEventListener("click", ativaSemanal);
mensal.addEventListener("click", ativaMensal);

//funções
function ativaDiario(){
    diario.classList.add("ativo");
    semanal.classList.remove("ativo");
    mensal.classList.remove("ativo");

    for(let i=0 ; i < rastreadorDiario.length; i++ ){
        rastreadorDiario[i].classList.remove("invisivel");
        rastreadorSemanal[i].classList.add("invisivel");
        rastreadorMensal[i].classList.add("invisivel");
        anteriorDiario[i].classList.remove("invisivel");
        anteriorSemanal[i].classList.add("invisivel");
        anteriorMensal[i].classList.add("invisivel");
    }

}
function ativaSemanal(){
    diario.classList.remove("ativo");
    semanal.classList.add("ativo");
    mensal.classList.remove("ativo");

    for(let i=0 ; i < rastreadorDiario.length; i++){
        rastreadorDiario[i].classList.add("invisivel");
        rastreadorSemanal[i].classList.remove("invisivel");
        rastreadorMensal[i].classList.add("invisivel");
        anteriorDiario[i].classList.add("invisivel");
        anteriorSemanal[i].classList.remove("invisivel");
        anteriorMensal[i].classList.add("invisivel");
    }

}

function ativaMensal(){
    diario.classList.remove("ativo");
    semanal.classList.remove("ativo");
    mensal.classList.add("ativo");
    for(let i = 0 ; i < rastreadorDiario.length; i++){
        rastreadorDiario[i].classList.add("invisivel");
        rastreadorSemanal[i].classList.add("invisivel");
        rastreadorMensal[i].classList.remove("invisivel");
        anteriorDiario[i].classList.add("invisivel");
        anteriorSemanal[i].classList.add("invisivel");
        anteriorMensal[i].classList.remove("invisivel");
        console.log(i)
    }
}

