const green = document.querySelector('.green');
const obstaculo = document.querySelector('.obstaculo');
const score = document.getElementById('score');
var hasJumped = false;
const tex2 = document.querySelector('.tex2')
const chao = document.querySelector('.chao')
const background = document.querySelector('.game-board')

const jump = () => {
    green.classList.add('jump');

    setTimeout(() => {
        green.classList.remove('jump');
    }, 500);
}

const loop = setInterval(()=>{
    const obstaculoPosition = obstaculo.offsetLeft;

    const greenPosition = +window.getComputedStyle(green).bottom.replace('px', '');


    console.log(greenPosition);

    if(obstaculoPosition <= 80 && obstaculoPosition > 0 && greenPosition < 60) {

        //parar obstáculo
        obstaculo.style.animation = 'none';
        obstaculo.style.left = `${obstaculoPosition}px`;

        //parar personagem
        green.style.animation = 'none';
        green.style.bottom = `${greenPosition}px`;

        //mudar imagem personagem pra morto
        green.src = './images/lhama-morta.png';
        green.style.width = '100px';

        //adicionar texto HTML
        tex2.innerHTML = 'Press <span>F5</span> to try again'

        //parar chao    
        chao.style.animation = 'none'

        //parar background
        background.style.animation = 'none';
        clearInterval(loop);
    }
    if(obstaculoPosition <= 90 && obstaculoPosition > 0 && greenPosition > 80) {
        
            
            setTimeout(function() { 
                if(!hasJumped){
                    hasJumped = true;
                    score.innerHTML++;
                }
                if(score = '2'){
                    background.style.animation = 'none';
                }
            }, 200);
            hasJumped = false;
    }
},10)

document.addEventListener('keydown', jump);
