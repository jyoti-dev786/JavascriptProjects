let btn = document.querySelector('button');
let output = document.getElementById('output');

function random(num){
    return Math.floor(Math.random() * (num + 1));
}



function changeColor(e){
    const rndColor ='rgb(' + random(255) + ',' + random(255)+ ',' + random(255) + ')';
   
    e.target.style.backgroundColor = rndColor;
    console.log(e);
}



btn.addEventListener('click', changeColor);


