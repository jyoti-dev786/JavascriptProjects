// //Bulb On and Off eg
let myImage = document.querySelector('img');

myImage.onclick = function()
{
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'bulbImg/bulbOff.jpg')
    {
        myImage.setAttribute('src' , 'bulbImg/bulbOn.jpg');
    }

    else
    {
        myImage.setAttribute('src' , 'bulbImg/bulbOff.jpg');
    }
    
}