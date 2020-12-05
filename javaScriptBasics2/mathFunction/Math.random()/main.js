let output = document.querySelector('#output');
let btn = document.querySelector('button');

function myFunction()
{
    let myNumber = Math.floor(Math.random() * 50 + 1);
    output.innerHTML = myNumber;
}


btn.addEventListener('click' , myFunction);
