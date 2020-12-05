let output = document.getElementById('output');
let input1 = document.getElementById('value1');
let input2 = document.getElementById('value2');
let btn = document.querySelector('button');


function myFunction(){
    let value1 = Number(input1.value);
    let value2= Number(input2.value);
    
    let result = value1 + value2;
    output.innerHTML = 'Addition of Numbers is : ' + result;
}


btn.addEventListener('click', myFunction);