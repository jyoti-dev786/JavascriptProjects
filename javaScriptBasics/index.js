
// //array eg
// let selectedColors = ['red','blue'];
// selectedColors[2] = 'green';

// console.log(selectedColors.length);

////object eg
// let person =
// {
//     name : 'Jyoti',
//     age : 32
// }

// console.log(person.name);


// //functions eg
// function greet(name , age)
// {
//     console.log("Hello " + name +  ' My age is  ' + age);
// }

// greet('Jyoti' , 34);


// function square(number){
//     return number * number;
// }

// console.log(square(3));
// let squareResult = square(8);
// console.log(squareResult);

// //events eg
// document.querySelector('html').onclick = function() {
//    alert('Ouch! Stop Poking Me');
// }



// let browserType = 'chrome';
// let length = browserType.length;
// for(let item=0; item<browserType.length; item ++)
// {
//     console.log(browserType[item]);
// }

// let htmlSet =document.querySelector('html');
// htmlSet.onclick = function(){
//     alert('Hi............');
// }

// document.querySelector("html").onclick = function() {
//     alert('Helloooooooooo')
// };



// //Bulb On and Off eg
// let myImage = document.querySelector('img');

// myImage.onclick = function()
// {
//     let mySrc = myImage.getAttribute('src');
//     if(mySrc === 'bulbImg/bulbOff.jpg')
//     {
//         myImage.setAttribute('src' , 'bulbImg/bulbOn.jpg');
//     }

//     else
//     {
//         myImage.setAttribute('src' , 'bulbImg/bulbOff.jpg');
//     }
    
// }



let myImage = document.querySelector('img');

myImage.onclick = function()
{
    let mySrc = this.getAttribute('src');
    if(mySrc === 'images/mickey1.png')
    {
        myImage.setAttribute('src' , 'images/mickeymini.png');
    }

    else
    {
        myImage.setAttribute('src' , 'images/mickey1.png')
    }

    
}


let lightOn = function()
{
  
   myImage.setAttribute('src' , 'bulbImg/bulbOn.jpg');

}

let lightOf = function()
{
    
    myImage.setAttribute('src' , 'bulbImg/bulbOff.jpg');
}