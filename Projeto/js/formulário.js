const horas = document.querySelector('#nhoras');

const botao = document.querySelector('.botao');

const opcao = document.querySelectorAll('.opcao')

const lista = document.querySelector('.lista')

const titulo = document.querySelectorAll('.rastreador-titulo')

console.log(rastreadorDiario[0].value)

botao.addEventListener("click", function(event){
    event.preventDefault();
    verifica();
});

function verifica(){
    console.log(lista.value);
    console.log(titulo[0].textContent);
    if(lista.value == titulo[0].textContent){
        rastreadorDiario[0].textContent = 0 
    }
}
