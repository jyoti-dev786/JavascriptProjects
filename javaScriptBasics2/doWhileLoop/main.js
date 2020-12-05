const cats = ['Billy', 'Jordan', 'Mr.Bee' , 'Mango'];
let output = document.querySelector('#output');
let btn = document.querySelector('button');
let info ='My Cats are ';


function myFunction()
{
    let i=0;
    do{
        if(i === cats.length-1)
        {
            info += 'and ' + cats[i];
        }
        else
        {
            info += cats[i] + ',';
        }
        i++
      }while(i < cats.length)

      output.innerHTML = info;

}

btn.addEventListener('click' , myFunction)