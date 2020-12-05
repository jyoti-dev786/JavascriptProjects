 let value1 = document.querySelector('#value1');
 let btn = document.getElementById('btn');

 
function myFunction()
{
    let InputValue = value1.value;
    console.log(Number(InputValue));
}

btn.addEventListener('click' , myFunction);

 
