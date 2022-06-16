let diario = document.querySelector(".diario");
console.log(diario);
let semanal = document.querySelector(".semanal");
console.log(semanal);
let mensal = document.querySelector(".mensal");
console.log(mensal);

diario.addEventListener("click", ativaDiario);

semanal.addEventListener("click", ativaSemanal);

mensal.addEventListener("click", ativaMensal);


function ativaDiario(){
    diario.classList.add("ativo");
    semanal.classList.remove("ativo");
    mensal.classList.remove("ativo");
}
function ativaSemanal(){
    diario.classList.remove("ativo");
    semanal.classList.add("ativo");
    mensal.classList.remove("ativo");
}
function ativaMensal(){
    diario.classList.remove("ativo");
    semanal.classList.remove("ativo");
    mensal.classList.add("ativo");
}
