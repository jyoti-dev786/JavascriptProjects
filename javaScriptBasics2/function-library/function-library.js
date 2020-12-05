let input = document.getElementById('value');
let output = document.getElementById('output');


function square(num)
{
    return num * num;
}


function cube(num){
    return num * num * num;
}


function factorial(num)
{

   if(num <0) return undefined;
   if(num == 0) return 1;
   let x= num-1;
   while(x >= 1)
   {
       num *=x;
       x--;
   }
    
   return num;


 
}

input.onchange = function() {
    const num = Number(input.value);
   
    if(isNaN(num)){
        
        output.innerHTML = "Please Enter a Number"
    }
    
    
    else {
        output.innerHTML = factorial(num);
    }

  }
