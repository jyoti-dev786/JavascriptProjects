const cats = ["Bill" , "Jane", "Tim" , "Mr.Blue"];

let button = document.querySelector('button');
let output = document.querySelector('#output');

let info ="my cats are ";





function myFunction()
{
    
  
  let i = 0;
  while(i < cats.length)
  {
      if(i === cats.length-1)
      {
          info += ' and ' + cats[i] + "."
          
      }

      else
      {
          info += cats[i] + " ";

      }

      i++;
  }

  output.innerHTML = info;
}


button.addEventListener('click', myFunction);