const horas = document.querySelector('#nhoras');

const botao = document.querySelector('.botao');

const opcao = document.querySelectorAll('.opcao')

const lista = document.querySelector('.lista')

const titulo = document.querySelectorAll('.rastreador-titulo')

console.log(rastreadorDiario[0].value)

let tempoDiario = [
    '5',
    '1',
    '0',
    '1',
    '0',
    '0',
]
let tempoSemanal = [
    '32',
    '10',
    '4',
    '4',
    '5',
    '2',
]
let tempoMensal = [
    '103',
    '23',
    '13',
    '11',
    '21',
    '7',
]
atribuiValores()

function atribuiValores() {
    for(let i = 0 ; i < tempoDiario.length; i++){
        rastreadorDiario[i].innerHTML = tempoDiario[i] + "hrs";
        rastreadorSemanal[i].innerHTML = tempoSemanal[i] + "hrs";
        rastreadorMensal[i].innerHTML = tempoMensal[i] + "hrs";
    }
}

botao.addEventListener("click", function(event){
    event.preventDefault();

    verifica(lista.value);
    atribuiValores()
    
    horas.value = '';

});

function verifica(itemLista){

    if(itemLista == titulo[0].textContent) {
        tempoDiario[0] = parseInt(tempoDiario[0]) + parseInt(horas.value);
        tempoSemanal[0] = parseInt(tempoSemanal[0]) + parseInt(horas.value);
        tempoMensal[0] = parseInt(tempoMensal[0]) + parseInt(horas.value);
    } 
    if(itemLista == titulo[1].textContent) {
        tempoDiario[1] = parseInt(tempoDiario[1]) + parseInt(horas.value);
        tempoSemanal[1] = parseInt(tempoSemanal[1]) + parseInt(horas.value);
        tempoMensal[1] = parseInt(tempoMensal[1]) + parseInt(horas.value);
    } 
    if(itemLista == titulo[2].textContent) {
        tempoDiario[2] = parseInt(tempoDiario[2]) + parseInt(horas.value);
        tempoSemanal[2] = parseInt(tempoSemanal[2]) + parseInt(horas.value);
        tempoMensal[2] = parseInt(tempoMensal[2]) + parseInt(horas.value);
    } 
    if(itemLista == titulo[3].textContent) {
        tempoDiario[3] = parseInt(tempoDiario[3]) + parseInt(horas.value);
        tempoSemanal[3] = parseInt(tempoSemanal[3]) + parseInt(horas.value);
        tempoMensal[3] = parseInt(tempoMensal[3]) + parseInt(horas.value);
    } 
    if(itemLista == titulo[4].textContent) {
        tempoDiario[4] = parseInt(tempoDiario[4]) + parseInt(horas.value);
        tempoSemanal[4] = parseInt(tempoSemanal[4]) + parseInt(horas.value);
        tempoMensal[4] = parseInt(tempoMensal[4]) + parseInt(horas.value);
    } 
    if(itemLista == titulo[5].textContent) {
        tempoDiario[5] = parseInt(tempoDiario[5]) + parseInt(horas.value);
        tempoSemanal[5] = parseInt(tempoSemanal[5]) + parseInt(horas.value);
        tempoMensal[5] = parseInt(tempoMensal[5]) + parseInt(horas.value);
    } 

}



