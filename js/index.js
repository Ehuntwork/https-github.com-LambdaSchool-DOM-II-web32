// Your code goes here
///////////////selected elements////////////
const headImg = document.querySelector('.home img');
const imgAll = document.querySelectorAll('img');
const button = document.querySelectorAll('.btn');
const h2All = document.querySelectorAll('.intro h2');
console.log(imgAll)


/////////////MOUSEOVER/////////////////////


headImg.addEventListener('mouseover', (event)=>{
    event.target.style.transform ='rotate(360deg)';
    event.target.style.transition ='1s';
});


////////////CLICK////////////////////////

for(let i = 0 ; i<imgAll.length;i++){
    imgAll[i].addEventListener('click', (event)=>{
        event.target.style.transform ='rotate(360deg)';
        event.target.style.transition ='1s';
        event.target.style.border = '2px solid red'
    })  
}

///////////KEYDOWN////////////////////////


for(let i = 0 ; i<imgAll.length;i++){
    imgAll[i].addEventListener('dblclick', (event)=>{
        event.target.style.display = 'none';
    })  
}

////////////////mouseenter///////////////////


for(let i = 0 ; i<imgAll.length;i++){
    imgAll[i].addEventListener('mouseenter', (event)=>{
        event.target.style.width = '20%';
        event.target.style.transition ='1s';
        
    })  
}

////////////////mouseenter///////////////////


for(let i = 0 ; i<imgAll.length;i++){
    imgAll[i].addEventListener('mouseleave', (event)=>{
        event.target.style.width = '100%';
        event.target.style.transition ='1s';
    })  
}

////////////////mousedown///////////////////


for(let i = 0 ; i<button.length;i++){
    button[i].addEventListener('mousedown', (event)=>{
        event.target.style.backgroundColor = 'red'
    })  
}


////////////////mouseup///////////////////


for(let i = 0 ; i<button.length;i++){
    button[i].addEventListener('mouseup', (event)=>{
        event.target.style.backgroundColor = 'black';
    })  
}


////////////////contextmenu///////////////////


for(let i = 0 ; i<button.length;i++){
    button[i].addEventListener('contextmenu', (event)=>{
        event.target.style.backgroundColor = 'grey';
    })  
}


////////////////contextmenu///////////////////
for(let i = 0 ; i<imgAll.length;i++){
    imgAll[i].addEventListener('click', (event)=>{
        event.target.style.transform ='rotate(360deg)';
        event.target.style.transition ='1s';
        event.target.style.border = '2px solid red'
    })  
}

////////////////dragstart///////////////////
for(let i = 0 ; i<h2All.length;i++){
    h2All[i].addEventListener('dragstart', (event)=>{
        event.target.style.display = 'none';
        console.lo
    })  
}