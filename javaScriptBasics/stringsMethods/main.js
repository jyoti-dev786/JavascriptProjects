
let strings= ['Jyoti' , 'Vikrant' , 'Geeta' , 'Vinay'];

console.log(strings.indexOf('Jyoti'));

let string = 'jyoti'


document.querySelector('p').textContent = strings.indexOf('Jyoti');

document.querySelector('p').textContent = strings.slice(2);


document.querySelector('#demo').textContent = string.slice(0,5);

    
let radData = 'My NaMe Is MuD';
let LowerCase = radData.toLowerCase();
let UpperCase = radData.toUpperCase();


document.querySelector('#lower').textContent = 'This is Lower Case Method :'  + LowerCase;
document.querySelector('#upper').textContent = `This is Upper Case Method : ${UpperCase}`;
console.log(LowerCase)