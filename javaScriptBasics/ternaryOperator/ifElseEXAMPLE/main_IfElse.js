
// //WITHOUT TERNARY OPERATOR
let select = document.querySelector('.select');
let bodyColor = document.querySelector('body');
document.body.style.padding = '10px';



// function colorChange()
// {
//     let colorChangeValue=select.value;
//     if(colorChangeValue === 'black')
//     {
//         bodyColor.style.backgroundColor = 'black';
//         bodyColor.style.color = 'white';
//         console.log(colorChangeValue);
//     }

//     else if(colorChangeValue === 'white')
//     {
//         bodyColor.style.backgroundColor = 'white';
//         bodyColor.style.color = 'black';
//         console.log(colorChangeValue);
//     }
// }


// bodyColor.addEventListener('change' , colorChange );



//Second Method 
function UpdateColor(bgColor, textColor)
{
    bodyColor.style.backgroundColor = bgColor;
    bodyColor.style.color = textColor;
}


function colorChange()
{
    let colorChangeValue=select.value;
    if(colorChangeValue === 'black')
    {
       UpdateColor('black' , 'white');
    }

    else if(colorChangeValue === 'white')
    {
       UpdateColor('white' , 'black');
    }


    else if(colorChangeValue === 'skyblue')
    {
       UpdateColor('skyblue' , 'white');
    }

    else if(colorChangeValue === 'pink')
    {
       UpdateColor('pink' , 'grey');
    }
}


bodyColor.addEventListener('change' , colorChange );

