// let x = 1;

//     function a() {
//       let y = 2;
//       output(z);
//     }

//     function b() {
//       let z = 3;
//       output(y);
//     }

//     function output(value) {
//       const para = document.createElement('p');
//       document.body.appendChild(para);
//       para.textContent = 'Value: ' + value;
//     }

//    // output(x);
//   a();
//   b();

//     //output(z);



// function myBigFunction() {
//     let myValue = 1;
        
//     subFunction1(myValue);
//     subFunction2(myValue);
//     subFunction3(myValue);
//   }
  
//   function subFunction1(v) {
//     console.log(v);
//   }
  
//   function subFunction2(value) {
//     console.log(value);
//   }
  
//   function subFunction3(value) {
//     console.log(value);
//   }
//   myBigFunction();


const btn = document.querySelector('button');
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    let WIDTH = document.documentElement.clientWidth;
    let HEIGHT = document.documentElement.clientHeight;

    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    function random(number) {
      return Math.floor(Math.random()*number);
    }

    
    
    function draw() {
      ctx.clearRect(0,0,WIDTH,HEIGHT);
      for(let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.fillStyle = 'rgba(0,255,0,0.3)';
        ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
        ctx.fill();
      }
    }
  
    btn.addEventListener('click',draw);
  