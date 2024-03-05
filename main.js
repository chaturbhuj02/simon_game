let gameseq=[];
let userseq=[];

let btns = ['one', 'two', 'three', 'four'];

let started=false;
let level=0;

let heading2= document.querySelector('h2');
let body= document.querySelector('body');

document.addEventListener("keydown", ()=>{
    if(started == false){
        console.log('game started');
        started= true;

        levelup();
    }
});

function levelup(){
    level++;
    heading2.innerText= `Level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);
    gameFlash(randBtn);
     
}

function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout(()=>{
        btn.classList.remove('flash');
    }, 250);
};

function userFlash(btn){
    btn.classList.add('userflash');
    setTimeout(()=>{
        btn.classList.remove('userflash');
    }, 250);
};

function btnPress(){
    let btn = this;
    userFlash(btn);
};

let allBtns = document.querySelectorAll('.box');
for (allBtn of allBtns){
    allBtn.addEventListener('click', btnPress);
}
