let para = document.querySelector('#demo');

let names = '';

const cats = ['Bill' , 'Jeff' , 'Pete', 'Biggles' , 'Jasmin'];
let info = 'My cats are called';

for(let i =0; i<cats.length; i++)
{
    // names +=   "  , " + cats[i] ; 
    // console.log(cats[i]);


     if (i === cats.length - 1) {
        names += 'and ' + cats[i] + '.';
      } else {
        names += cats[i] + ', ';
      }

}

para.textContent = info + " "+ names;

