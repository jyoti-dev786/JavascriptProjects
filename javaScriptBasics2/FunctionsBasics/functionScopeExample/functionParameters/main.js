let text = 'My String';
let NewText = text.replace('String' , 'New String');
let output = document.querySelector('p');
let joinOutput = document.querySelector('#joinOutput')
let output1 = document.querySelector('#output1');

console.log(text);
console.log(NewText);

let myArray = ['I', 'love' , 'Chocolate' , 'frogs'];
let madeAString = myArray.join(' ');

console.log(myArray); 
console.log(madeAString);


output1.innerHTML = myArray + '</br>' + '</br>';

for(let i=0; i < myArray.length ; i++)
{
    output.innerHTML += myArray[i] + '</br>'; //This is looping function output(one after other word array) 
}

joinOutput.innerHTML = madeAString + '</br>';  //Join Function Output