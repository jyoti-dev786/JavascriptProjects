const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

console.log(random(255));
btn.onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}