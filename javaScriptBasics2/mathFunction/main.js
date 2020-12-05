let output = document.querySelector('#output');
let input = document.querySelector('input');
let btn = document.querySelector('button');




function mathFunction()
{

   let  inputNumber =Number(input.value);
   console.log("This is Input Value : ", inputNumber); 
   let squareRoot = Math.sqrt(inputNumber);
   console.log("Square Root : ",squareRoot); 
   let floorNumber = Math.floor(squareRoot);
   console.log("This is  Math Floor Number : ", floorNumber);
   input.value = '';
   input.focus();

   output.innerHTML = `Square Root is : ${squareRoot}  
                       </br>Floor Number is : (ie. round number):  ${floorNumber}`;
  
}

btn.addEventListener('click' , mathFunction);




