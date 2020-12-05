let output = document.getElementById('output');
let btn = document.querySelector('button');

let input1 = document.getElementById('value1');
let input2 = document.getElementById('value2');

function myFunction(){
    let value1 = Number(input1.value);
    let value2 = Number(input2.value);

    
    
    return value1 + value2;
    
    
}


function myFunction2(){
    
    output.innerHTML = 'Adding Of Two Numbers is : ' + myFunction();
    
}

btn.addEventListener('click', myFunction2);