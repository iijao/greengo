const green = document.querySelector('.green');
const obstaculo = document.querySelector('.obstaculo');

const jump = () => {
    green.classList.add('jump');

    setTimeout(() => {
        green.classList.remove('jump');
    }, 500);
}

const loop = setInterval(()=>{
    const obstaculoPosition = obstaculo.offsetLeft;
    const greenPosition = +window.getComputedStyle(green).bottom.replace('px', '');

    console.log(greenPosition)

    if(obstaculoPosition <= 90 && obstaculoPosition > 0 && greenPosition < 80) {

        obstaculo.style.animation = 'none'
        obstaculo.style.left = `${obstaculoPosition}px`

        green.style.animation = 'none'
        green.style.bottom = `${greenPosition}px`

        green.src = 'morte.png';
        green.style.width = '88px'


        clearInterval(loop);
    }

},10)

document.addEventListener('keydown', jump); 
