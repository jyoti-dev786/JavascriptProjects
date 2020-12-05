const contacts = ["Chris:4565676", "Jenny:6756342", "Danny:9874343" , "Jane:2323443"];

let input = document.querySelector("input");
let button = document.querySelector("button");
let output = document.querySelector("#output");
//extra line to add newLine in html when using text content(given below)
//output.setAttribute('style', 'white-space: pre;');


button.addEventListener("click" , function(){
 let inputValue = input.value.toLowerCase();
 console.log(inputValue);


 for(let i=0; i<contacts.length; i++)
 {
     //console.log(contacts[i]);
     let splitContacts = contacts[i].split(":");
     console.log(splitContacts[0] + " "+  splitContacts[1]);
     //output.innerHTML +=  splitContacts[0] + " "+  splitContacts[1] +'.<br />';
     //output.textContent +=  splitContacts[0] + " "+  splitContacts[1] +' \r\n';

     
     if(splitContacts[0].toLowerCase() === inputValue)
     {
         output.innerHTML = splitContacts[0] +'\'s number is '+ splitContacts[1];
         break;
     }

     else
     {
         output.innerHTML = "contact not found"
     }
 }

 

});





// //forEach Example correct
// let output = document.querySelector('#output');
// const fruits =["Apple", "Banana" , "Grapes", "Kiwi"];


// fruits.forEach(myfunction)

// function myfunction(item , index)
// {
//     output.innerHTML += index + " : "+  item + " " + "</br>"; 
// }

