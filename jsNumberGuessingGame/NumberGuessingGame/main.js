let randomNumber = Math.floor(Math.random() * 100) + 1;

let userInput = document.getElementById('userInput');
let button = document.querySelector('button');

let numberOfGuesses = document.getElementById('numberOfGuesses');
let finalResult = document.getElementById('lastResult');
let LowHigh = document.getElementById('lowOrHighGuess');
let guessCount = 1;


let resultParas = document.querySelector('.resultParas');
let resetButton;
//let button1 = document.querySelector('.btn');





function myFunction()
{
    let userGuess = Number(userInput.value);
    console.log(userGuess);
    console.log(typeof(userGuess));


    if(guessCount === 1)
    {
       
        document.getElementById('numberOfGuesses').innerHTML = 'Previous guesses : ';

    }
    document.getElementById('numberOfGuesses').innerHTML += userGuess + ' ';
    

    

     if(guessCount === 10)
    {
        
        document.getElementById('lastResult').innerHTML = '!!!GAME OVER!!!';
        setGameOverForButton();
    }


    else
    {
        document.getElementById('lastResult').innerHTML = 'Wrong !';
        document.getElementById('lastResult').style.backgroundColor = 'red';
        if(userGuess <randomNumber)
        {
            document.getElementById('lowOrHighGuess').innerHTML ='Last guess was too low!';
        }
        else if(userGuess > randomNumber)
        {
            document.getElementById('lowOrHighGuess').innerHTML ='Last guess was too high!';
            
        }
    }

    if(userGuess === randomNumber)
    {
        document.getElementById('lastResult').innerHTML = 'Congratulations! You got it right!';
        document.getElementById('lastResult').style.backgroundColor = 'green';
        setGameOverForButton();

    }
   
    guessCount++;
    userInput.value ='';
    userInput.focus();
    
   
    
}

button.addEventListener('click' , myFunction);

console.log(randomNumber);




function setGameOverForButton()
{
    userInput.disabled = true;
    button.disabled = true;

    resetButton = document.createElement('button');
    resetButton.innerHTML = 'Start New Game';
    document.body.append(resetButton);
    resetButton.addEventListener('click' , resetGameFunction);
    
}

function resetGameFunction()
{
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }


  resetButton.parentNode.removeChild(resetButton);

    userInput.disabled = false;
    button.disabled = false;
    userInput.value ='';
    userInput.focus();

   
    //finalResult.style.backgroundColor = 'white';

    let randomNumber = Math.floor(Math.random() * 100) + 1;

    

}













