let seuVotoPara = document.querySelector('.d-1-texto span');
let cargo = document.querySelector('.d-1-2 span');
let descrição = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2')
let lateral = document.querySelector('.d-1-direita');
let numeros = document.querySelector('.d-1-3')

let etapaAtual = 0;
let numero = '';

function comecarEtapa(){
    let etapa = etapas[etapaAtual];

    let numeroHTML = ``;

    for(let i = 0; i<etapa.numeros;i++){
        if(i === 0){
            numeroHTML += `<div class='numero pisca'></div>`
        }else{
        numeroHTML += `<div class='numero'></div>`
    }}

    seuVotoPara.style.display=`none`;
    cargo.innerHTML = etapa.titulo;
    descrição.innerHTML = ``;
    aviso.style.display = `none`;
    lateral.innerHTML = ``;
    numeros.innerHTML = numeroHTML;
}
function atualizaInterface(){
let etapa = etapas[etapaAtual];
let candidato = etapa.candidatos.filter((item) =>{
    if(item.numero === numero){
        return true;
    }else{
        return false;
    }
});
console.log(`Candidato`,candidato);

}  


function clicou(n){
let elNumero = document.querySelector('.numero.pisca');
if(elNumero !== null){
    elNumero.innerHTML = n;
    numero = `${numero}${n}`;

    elNumero.classList.remove('pisca');
    if(elNumero.nextElementSibling !== null){
    elNumero.nextElementSibling.classList.add('pisca');
}else{
    atualizaInterface()
}
}

 }

function branco(){
    alert('clicou em branco');
}
function corrige(){
    alert('clicou em corrige');
}
function confirma(){
    alert('clicou em confirma');
}

comecarEtapa();