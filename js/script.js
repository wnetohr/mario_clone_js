const luffy = document.querySelector(".luffy");
const pipe = document.querySelector('.pipe');
const score = document.querySelector('.gamescore');

const jump = () => {
    luffy.classList.add('jump');
    setTimeout(()=>{
        luffy.classList.remove('jump')
    },500)
}

const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const luffyPosition = +window.getComputedStyle(luffy).bottom.replace('px','');
    console.log(luffyPosition);
    if (pipePosition<=100 && pipePosition > 0 && luffyPosition<150){
        //save pipe position 
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        //save luffy position
        luffy.style.animation = 'none';
        luffy.style.bottom = `${luffyPosition}px`;
        //change luffy image for gameover
        luffy.src = './images/gameover.gif';
        luffy.style.width = '100px';
        score.src ='./images/gameover.png';
        score.style.marginLeft = "auto";
        score.style.marginRight = "auto";

        clearInterval(loop);
    }
})

document.addEventListener('keydown',jump);