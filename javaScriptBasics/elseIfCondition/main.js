let selectInput = document.querySelector('.select');
let displayVal = document.querySelector('.demo');

selectInput.addEventListener('change', setWeather);


function setWeather()
{
    const choice = selectInput.value;
   if(choice === 'sunny')
   {
    displayVal.innerHTML = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  }

   else if(choice === 'rainy')
   {
    displayVal.innerHTML = `'Rain is falling outside;  
       take a rain coat and an umbrella, 
       and don\'t stay out for too long.
       `;
   }

   else if(choice === 'snowing')
   {
    displayVal.innerHTML = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
   }

   else if(choice === 'overcast')
   {
       displayVal.innerHTML = `It isn\'t raining, but the sky is 
       grey and gloomy; 
       it could turn any minute, 
       so take a rain coat just in case.`;
   }

   else
   {
        displayVal.innerHTML = ``;
   }



}



let isBirthday= false;

const greeting = (isBirthday)? 'Happy Birthday' : 'Good Morning';

console.log(greeting);