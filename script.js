let seuVotoPara = document.querySelector('.d-1-texto span');
let cargo = document.querySelector('.d-1-2 span');
let descrição = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2')
let lateral = document.querySelector('.d-1-direita');
let numeros = document.querySelector('.d-1-3')

let etapaAtual = 0;
let numero = '';
let votoBranco = false;
let votos = []

function comecarEtapa(){
    let etapa = etapas[etapaAtual];

    let numeroHTML = ``;
    numero ='';
    votoBranco=false;

    for(let i = 0; i <etapa.numeros;i++){
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
if(candidato.length > 0){
    candidato = candidato[0];
    seuVotoPara.style.display = `block`;
    aviso.style.display= `block`;
    descrição.innerHTML = `Nome: ${candidato.name}<br/>Partido: ${candidato.partido}`

    let fotosHTML =``;
    for(let i in candidato.fotos){
        if(candidato.fotos[i].small){
            fotosHTML += `<div class='d-1-imagem small'>
            <img src="img/vereador.jpg" alt=''>
            ${candidato.fotos}
            Vereador
        </div>`}else{
        fotosHTML +=  `<div class='d-1-imagem'>
        <img src="img/bozo.jpeg" alt=''>
        ${candidato.fotos}
        Vereador
    </div>`
    }}
    lateral.innerHTML = fotosHTML;
}else{
seuVotoPara.style.display = 'block';
aviso.style.display= `block`;
descrição.innerHTML =`<div class='aviso--grande pisca'>VOTO NULO</div>`;
}

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
  if(numero === ''){
    votoBranco =true;
    seuVotoPara.style.display='block';
    aviso.style.display= `block`;
    numeros.innerHTML ='';
    descrição.innerHTML =`<div class='aviso--grande pisca'>VOTO BRANCO</div>`;
  }else{
      alert('para votar em Branco nao pode ter digitado nenhum numero')
  }
}
function corrige(){
    comecarEtapa();
}
function confirma(){
    let etapa =etapas[etapaAtual];
    let votoConfirmado = false;
    if(votoBranco === true){
        votoConfirmado =true;
        votos.push({
            etapa:etapas[etapaAtual].titulo,
            voto:'branco'
        });
    }else if(numero.length === etapa.numeros){
        votoConfirmado = true;
        votos.push({
            etapa:etapas[etapaAtual].titulo,
            voto: numero
        });
    }
    if(votoConfirmado){
        etapaAtual++;
    if(etapas[etapaAtual] !== undefined){
        comecarEtapa();
    }else{
    tela = document.querySelector('.tela')
    tela.innerHTML = `<div class='aviso--gigante pisca'>FIM</div>`;
        console.log(votos)
    }
    }
}
 
comecarEtapa();