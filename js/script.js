const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = ()=>{

    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump');
    }, 500);

}

/*Funcion: ()=>{} */
const loop = setInterval(()=>{

    console.log('loop'); /*Queda en constante loop, entonces usar clearInterval */

    const pipePosition = pipe.offsetLeft;
    /*El + convierte en numeros */
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    /*console.log(pipePosition); Imprime el valor que esta en .pipe{left:120px} */

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        /*Para que mario pare en la posicion antes del pipe */
        pipe.style.left = `${pipePosition}px`; /*.pipe{left:120px} */

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './image/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop); /*Para que pare cuando mario se topa con el pipe */
    }
}, 10);

document.addEventListener('keydown', jump);