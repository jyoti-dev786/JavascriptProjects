let output = document.getElementById('output');
let btn = document.querySelector('button');


function random(number){
    const result = Math.floor(Math.random() * number);
    return result;

}

function myFunction()
{
    output.innerHTML = random(10);
}



btn.addEventListener('click' , myFunction);


