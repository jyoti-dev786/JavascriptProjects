// let myPara = document.querySelector('p');

// myPara.addEventListener('click' , myArrayFun)


// function myArrayFun()
// {
//     let arrayLetters = ['J', 'Y', 'O' , 'T' ,'I'];
// for(let letters in arrayLetters)
// {
//     console.log(arrayLetters[letters]);
   
//     myPara.innerHTML +=  arrayLetters[letters] +  "[" + [letters]  + "]" + " ";
// }

// }


let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];
let item = ''; 

// Add your code here
let removeItem = myArray.pop();
let addItem = myArray.push('Jyoti' , 'Geeta');
//console.log(myArray);


let myString = item;
 // Don't edit the code below here!

 const section = document.querySelector('section');
 
 let para1 = document.createElement('p');
 
   
 for(let i =0; i<myArray.length; i++)
 {
      item = myArray[i] + ' ' +'(' + [i] + ')' ;
     console.log(item);
    let myString = item;
   
    para1.textContent += myString;
   
 }
 
 
 section.appendChild(para1);
    



