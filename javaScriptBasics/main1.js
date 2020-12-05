let paragraph = document.querySelector('p');

paragraph.addEventListener('click', updateName);

function updateName()
{


    let name = prompt('Enter a Name');
    if(name == null)
    {
        document.getElementById('dd').innerHTML = 'Please Enter the Name';
    }

    else
    paragraph.textContent = 'Player 1 is : ' + name
}




// document.querySelector('button').addEventListener('click' , myFunction);

// function myFunction()
// {
//     let heading3 = document.querySelector('h3');
//     let userName = document.querySelector('input').value;
//     heading3.textContent = 'The Given Name is : ' + userName;

// }



