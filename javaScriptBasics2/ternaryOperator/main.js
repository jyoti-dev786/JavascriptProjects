const html = document.querySelector('html');

const select = document.querySelector('select');


function colorChange(bgColor, textColor)
{

    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

select.onchange = function(){
    (select.value === 'black') ? colorChange('black' , 'white') : colorChange('white' , 'black');
}

 