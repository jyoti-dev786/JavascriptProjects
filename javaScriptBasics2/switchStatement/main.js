let choiceSelected = document.querySelector('select');
let html = document.querySelector('html');

function myFunction(event)
{
   console.log(choiceSelected.value);
   //below line is same as above
    console.log(event.target.value);
    switch(choiceSelected.value)
    {
        case 'white' : colorChange('white','black');
        break;

        case 'black' : colorChange('black', 'white');
        break;
        
        case 'purple' : colorChange('purple' , 'pink');
        break;

        case 'yellow' : colorChange('yellow' , 'blue');
        break;

        case 'green' : colorChange('green' , 'yellow');
        break;

        case 'pink' : colorChange('pink' , 'green');
        break;
    }

}


choiceSelected.addEventListener('change' ,myFunction);


function colorChange(bgColor, textColor)
{
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}