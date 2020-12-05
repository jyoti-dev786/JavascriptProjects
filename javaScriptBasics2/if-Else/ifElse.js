let html = document.querySelector('html');

let select = document.querySelector('select');

function changeColor()
{
    if (select.value === 'white')
    {
        html.style.backgroundColor = 'white';
        html.style.color = 'black';
    }

    else if(select.value === 'black')
    {
        html.style.backgroundColor = 'black';
        html.style.color = 'white';
    }
}


select.addEventListener('change' , changeColor);