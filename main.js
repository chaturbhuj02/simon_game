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
    userseq=[];
    level++;
    heading2.innerText= `Level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameseq.push(randColor);
    console.log(gameseq);
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

function checkAns(idx){
    // console.log("Current level:", level);

    if (userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(()=>{
                levelup();
            }, 1000)
        }
    }
    else{
        heading2.innerHTML=`Game Over!! Your score was <b>${level}</b>. <br> Press any key to start`;
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = 'white';
        }, 250);
        reset();
    }
}   


function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userseq.push(userColor);

    checkAns(userseq.length-1);
};

let allBtns = document.querySelectorAll('.box');
for (allBtn of allBtns){
    allBtn.addEventListener('click', btnPress);
}

function reset(){
    started= false;
    gameseq=[];
    userseq=[];
    level=0;
}