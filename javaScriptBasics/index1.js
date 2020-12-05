let myName = document.getElementById("name").value;





function myFunction1()
{

    let myName = document.getElementById("name").value;
    localStorage.setItem('name' , myName);


    if(myName == '')
{
    document.getElementById('demo1').innerHTML = 'Please Enter the Name';

}

else
{
    let StoredName = localStorage.getItem('name');
    document.getElementById('demo1').innerHTML 
    = 'The Local Storage Value is  ' + StoredName;
}
}


