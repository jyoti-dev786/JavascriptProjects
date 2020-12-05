let randomNumber = Math.floor(Math.random() * 100) + 1;
let InputNumber = document.getElementById('inputNumber');
let button = document.querySelector('button');
let UserInput =Number(InputNumber.value);

function myFunction()
{
    let UserInput =Number(InputNumber.value);
//let InputNumber = document.getElementById('inputNumber').value;
 //console.log(InputNumber);
 console.log(UserInput);
 console.log(typeof(UserInput));

 if(UserInput == randomNumber )
 {
     document.getElementById('demo').innerHTML = 'Congratulations! You are right';

 }

 else
 {
     document.getElementById('demo').innerHTML = 'The Given Number is Wrong , that is  : ' + UserInput;
 }
}



button.addEventListener('click' , myFunction);
console.log(randomNumber);

