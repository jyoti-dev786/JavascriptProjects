let input = document.querySelector('#input');
let button = document.querySelector('button')
let p = document.querySelector('p');
let userInput = Number(input.value);


function inputValue()
{
    let userInput = Number(input.value);
    console.log(userInput);
    
  
  document.getElementById('demo').innerHTML = (userInput<18)? "Too Young to vote" : "Enough Old to Vote";

  
   
    
}

button.addEventListener('click', inputValue);

//Ternary Operator syntax
//( condition ) ? run this code : run this code instead