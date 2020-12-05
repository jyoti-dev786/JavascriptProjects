let select = document.querySelector('select');
let html = document.querySelector('html');
let para = document.querySelector('#demo');

//This below code is correct and consists direct URL of Images
// image_url concept website   ==>  https://code.likeagirl.io/js-set-a-background-using-code-1cc26cf96ce4
// const images = {
//       rainyPic : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8gGAx_ZeH91LgbzaHQcY22RXcpYMe3cbd5Q&usqp=CAU',
//       summerPic : 'https://content.thriveglobal.com/wp-content/uploads/2018/11/summer-01-1.jpg',
//       springPic : 'https://i2.wp.com/www.aplustopper.com/wp-content/uploads/2020/03/Essay-on-Spring-Season.png?resize=476%2C316&ssl=1',
//       winterPic : 'https://rashmiboradas.files.wordpress.com/2019/02/winter.jpg',

// };


//This below code is also correct only change is that all the images
//are stored in folder(i.e imageFolder) and their path is given below.
const images = {
  rainyPic : '../imageFolder/rainySeason.jpg',
  summerPic : '../imageFolder/summerSeason.jpg',
  springPic : '../imageFolder/springSeason.jpeg',
  winterPic : '../imageFolder/winterSeason.jpg',

}



function myFunction()
{
  let selectedChoice = select.value;

  switch(selectedChoice)
  {
    case 'rainy' : changeColor('rainyPic', 'red' , 'This is Rainy Season');
    break;

    case 'summer' : changeColor('summerPic', 'Pink' , 'This is Summer Season');
    break;

    case 'spring' : changeColor('springPic', 'blue',  'This is Spring Season');
    break;

    case 'winter' : changeColor('winterPic', 'yellow' , 'This is Winter Season');
    break;

    
  }
}



//Note: if we want to access the images object  single pic
//then we write the syntax "console.log(images.rainyPic);
//but when we want to access the a parameter i.e bgImage paramater
// from changeColor function then the syntax is
//console.log(images[bgImage]); like an array

function changeColor(bgImage, textColor, textValue)
{
 html.style.backgroundImage = "url('"+images[bgImage]+"')"; 
 console.log(images[bgImage]);
 html.style.color = textColor;
 para.textContent = textValue;
 
}


select.addEventListener('change', myFunction);