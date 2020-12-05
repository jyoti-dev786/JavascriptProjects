let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName()
{
    let myName = prompt('Please Enter your name.');
    localStorage.setItem('name' , myName);

    if(myName == '')
    {
        myHeading.textContent = "You did not Enter the Name but clicked OK BUTTON on prompt"
    }

else if(myName == null)
{
     myHeading.textContent = "Pls Enter the Name ";

}

  

// else if(!localStorage.getItem('name'))
// {
   
// }

else
{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Chrome is cool, ' + storedName;
}
     

}




myButton.onclick = function()
{
    setUserName();
}