const horas = document.querySelector('#nhoras');

const botao = document.querySelector('.botao');

const opcao = document.querySelectorAll('.opcao')

const lista = document.querySelector('.lista')


const titulo = document.querySelectorAll('.rastreador-titulo')

console.log(rastreadorDiario)

botao.addEventListener("click", function(event){
    event.preventDefault();
    console.log(horas.value)
    console.log(lista.value)
    verifica();

});

function verifica(lista.value){
    for(let i = 0; i < titulo.length; i++){
        if(titulo[i].textContent = lista){
            
        }
    }

}


function addHoras(){
    
}