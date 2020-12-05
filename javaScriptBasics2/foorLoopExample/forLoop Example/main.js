////--------------------------------------------For Loop examples 1------------------------------------------------------------------
////This example consists of an extra variable i.e info which consists of information 

// const cats = ["Bill", "Jeff" , "Pete" , "Biggles", "Jasmin"];

// let output = document.querySelector("#output");
// let info ="my cats are"
// let result ="";
// for(let i=0; i<cats.length; i++)
// {
//      result += cats[i] + "," +  "</br>" ;
//      console.log(cats[i])
// }



// output.innerHTML =  info + " " + result ; 


//--------------------------------------For Loop examples 2------------------------------------------------------------------------------------------------------


// const dogs = ["Tommy", "Key" , "BlackJ" , "Tim"];


// let output = document.querySelector('#output');

// for(let i = 0; i < dogs.length ; i++)
// {
//    output.innerHTML +=  dogs[i] + "</br>";
//    console.log(dogs[i]);
// }


// //--------------------------------For loop example 3 ------------------------------------------------------------------------------
// const dogs = ["Tommy", "Key" , "BlackJ" , "Tim"];
// let output = document.querySelector("#output");
// let mydogInfo = "My dogs are ";

// for (i = 0; i < dogs.length ; i++)
// {
//     if( i === dogs.length-1)
//         {
//             mydogInfo += 'and ' + dogs[i] + ".";
//             console.log(dogs.length-1)
            
//         }
//     else
//         {
//             mydogInfo += dogs[i] + " , ";
//         }

// }

// output.innerHTML = mydogInfo;

//-------------------------------------------------For Loop Example 4-------------------------------------------------------------------


let input = document.querySelector('#search');
let output = document.querySelector('#output');
let btn = document.querySelector('button');
 

let squareRoot =  Math.sqrt(4);
let FloorSqRoot = Math.floor(2)



function myFunction()
{
  //debugger;
    
    output.textContent = '';
    let num = input.value;
    input.value = '';
    input.focus();
    for (let i = 1; i <= num; i++) {
      let sqRoot = Math.sqrt(i);
     
      if (Math.floor(sqRoot) !== sqRoot) {
       
        continue;
      }
    
      output.textContent += i + ' ';
    }
}

console.log("Square Root is " + squareRoot)
console.log("Floor SqRoot Root is " + FloorSqRoot)
btn.addEventListener('click' , myFunction);
























