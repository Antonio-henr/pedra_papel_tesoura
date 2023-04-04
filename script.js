const pedra=document.getElementById('pedra')
const papel=document.getElementById('papel')
const tesoura=document.getElementById('tesoura')

const botoes=document.querySelectorAll('input[type="button"]')

const pedra_img=document.getElementById('pedra_img')
const papel_img=document.getElementById('papel_img')
const tesoura_img=document.getElementById('tesoura_img')
const aguardando_img=document.getElementById('aguardando_img')

const pedra_inimigo=document.getElementById('pedra_img_inimigo')
const papel_inimigo=document.getElementById('papel_img_inimigo')
const tesoura_inimigo=document.getElementById('tesoura_img_inimigo')
const aguardando_inimigo=document.getElementById('aguardando_img_inimigo')

const imagens=document.querySelectorAll('.images')

const placar=document.getElementById('placar')

const errado = new Audio('../sons/errado.mp3')
const acerto = new Audio('../sons/acerto.mp3')

//ação para limpar a imagem anterior
Array.from(botoes).map((el)=>{
    el.addEventListener('click',()=>{
        pedra_img.style.display="none";
        tesoura_img.style.display="none"
        papel_img.style.display="none"
        aguardando_img.style.display="none"
    })

})

//boot gerando números aleatórios
function aleatorios(){
let i = Math.floor(Math.random() * 3);
if(i==0){
    pedra_inimigo.style.display="block";
    tesoura_inimigo.style.display="none"
    papel_inimigo.style.display="none"
    aguardando_inimigo.style.display="none"
}else if(i==1){
    pedra_inimigo.style.display="none";
    tesoura_inimigo.style.display="block"
    papel_inimigo.style.display="none"
    aguardando_inimigo.style.display="none"
}else if(i==2){
    pedra_inimigo.style.display="none";
    tesoura_inimigo.style.display="none"
    papel_inimigo.style.display="block"
    aguardando_inimigo.style.display="none"

}
}

//funçãp aguardando
function aguardando(){
    pedra_inimigo.style.display="none"
    tesoura_inimigo.style.display="none"
    papel_inimigo.style.display="none"
    aguardando_inimigo.style.display="block"
}

//1=venceu 2=perdeu 3=empate
var resultado=0
function vencedor(){
if(pedra_img.style.display=="block"&&pedra_inimigo.style.display=="block"){
    resultado=3
}else if(pedra_img.style.display=="block"&&papel_inimigo.style.display=="block"){
    resultado=2
}else if(pedra_img.style.display=="block"&&tesoura_inimigo.style.display=="block"){
    resultado=1
}else if(papel_img.style.display=="block"&&pedra_inimigo.style.display=="block"){
    resultado=1
}else if(papel_img.style.display=="block"&&papel_inimigo.style.display=="block"){
    resultado=3
}else if(papel_img.style.display=="block"&&tesoura_inimigo.style.display=="block"){
    resultado=2
}else if(tesoura_img.style.display=="block"&&pedra_inimigo.style.display=="block"){
    resultado=2
}else if(tesoura_img.style.display=="block"&&papel_inimigo.style.display=="block"){
    resultado=1
}else if(tesoura_img.style.display=="block"&&tesoura_inimigo.style.display=="block"){
    resultado=3
}
}
//atualização de placar
var vitoria=0
var derrota=0
var empates=0

function placar_atualizado(){
    if(resultado==1){
        vitoria++
        placar.innerHTML=`VITÓRIAS:`+vitoria+` DERROTAS:`+derrota+` EMPATES:`+empates
        document.querySelector('body').style.backgroundColor="lightgreen"
        acerto.play();
    }else if(resultado==2){
        derrota++
        placar.innerHTML=`VITÓRIAS:`+vitoria+` DERROTAS:`+derrota+` EMPATES:`+empates
        document.querySelector('body').style.backgroundColor="orangered"
        errado.play();
    }else if(resultado==3){
       empates++
       placar.innerHTML=`VITÓRIAS:`+vitoria+` DERROTAS:`+derrota+` EMPATES:`+empates
        console.log(empates);
        document.querySelector('body').style.backgroundColor="white"
    }else{
        alert("deu erro")
    }
}

pedra.addEventListener('click',()=>{
    pedra_img.style.display="block"
    aguardando()
    setTimeout(() => {
        aleatorios()
        vencedor()
        placar_atualizado()
    }, 1000);
})

papel.addEventListener('click',()=>{
    papel_img.style.display="block"
    aguardando()
    setTimeout(() => {
        aleatorios()
        vencedor()
        placar_atualizado()
    }, 1000);
})


tesoura.addEventListener('click',()=>{
    tesoura_img.style.display="block"
    aguardando()
    setTimeout(() => {
        aleatorios()
        vencedor()
        placar_atualizado()
    }, 1000);
})

