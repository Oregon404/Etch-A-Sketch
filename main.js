let color ='black';
const body = document.querySelector('body');

const title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'Etch A Sketch';
title.style.fontSize = '30px';
title.style.textAlign = 'center';

body.appendChild(title);

let container= document.createElement('div');
container.classList.add('wraper');
container.style.width='800px';
container.style.height='800px';
container.style.display='grid';
container.style.border='solid';
body.appendChild(container);



function grid(size){
    container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    
    let amount = size * size;
    for(let i=0;i < amount; i++){
        let box = document.createElement('div');
        box.classList.add('box')
        box.addEventListener('mouseover',colorSquare);
        box.style.backgroundColor='white';
        container.insertAdjacentElement('beforeend', box);
    } resetGrid();
}
grid(16);
function changeSize(input){
    if(input > 0 && input <= 100 ){
        grid(input);
    }else{
        alert("enter num > 0 && <= 100");
    }
}

const ui=document.createElement('p');
ui.classList.add('ui');
container.insertAdjacentElement('afterend', ui);

const sizeInput=document.createElement('div');
sizeInput.classList.add('sizeInput');
ui.appendChild(sizeInput);

const blkBtn=document.querySelector('#black');
const bluBtn=document.querySelector('#blue');
const ersBtn=document.querySelector('#white');
const resBtn=document.querySelector('#reset');
ui.appendChild(blkBtn);
ui.appendChild(bluBtn);
ui.appendChild(ersBtn);
ui.appendChild(resBtn);

const text=document.querySelector('#text');
const sizeBtn=document.querySelector('#changeSize');
sizeInput.appendChild(text);
sizeInput.appendChild(sizeBtn);

function colorSquare(){
    this.style.backgroundColor=color;
}

function changeColor(choice){
    color=choice;
}

function resetGrid(){
    let container= document.querySelector('.wraper');
    let box= document.querySelectorAll('div');
    box.forEach((div) => div.style.backgroundColor='white');
}