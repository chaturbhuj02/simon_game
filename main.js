let gameseq=[];
let userseq=[];
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
     
}

