let output = document.getElementById('output');
 let btn = document.querySelector('button');


let myString='';

function myFunction()
{
    myString = "Hello World";
    
    return `<h1>${myString}</>`
}

btn.onclick = ()=>
{
   output.innerHTML = myFunction();
   
}



