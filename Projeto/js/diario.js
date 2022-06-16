let rastreadorDiario = document.querySelector('.rastreador-tempo-diario');
let rastreadorSemanal = document.querySelector('.rastreador-tempo-semanal')

console.log(rastreadorDiario)
console.log(rastreadorSemanal)

diario.addEventListener("click", ativaDiario);

semanal.addEventListener("click", function(){
    rastreadorDiario.classList.add('invisivel')
    rastreadorSemanal.classList.remove('invisivel')
});

