const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
let splitValue = '';
let output = document.querySelector('#output');
for(let i= 0; i<contacts.length; i++)
{
     splitValue = contacts[i].split(':');
    //console.log(contacts[i])
    //console.log(contacts[i].split(' '))
   // console.log(contacts[i].split(':'));
   //console.log(splitValue);
   console.log(splitValue);

for(let j = 0; j< splitValue.length; j++)
{
    console.log("This is split value   "   ,splitValue[j])
    output.textContent = `${splitValue[j]}`;
}

   
}




//output.textContent = splitValue;

