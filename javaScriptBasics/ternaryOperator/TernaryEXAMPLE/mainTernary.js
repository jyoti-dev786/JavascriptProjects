let select = document.querySelector('select');
let html = document.querySelector('html');

 colorChange = (bgColor , textColor)  =>
{
    html.style.background = bgColor;
    html.style.color = textColor;
}


select.addEventListener('change', function(){
    (select.value === 'black')? colorChange('black' , 'white') : colorChange('white' , 'black');
});