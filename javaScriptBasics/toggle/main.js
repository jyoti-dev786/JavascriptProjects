const btn = document.querySelector('button');
const txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.textContent === 'Start machine') {
    btn.textContent = 'Stop machine';
    txt.textContent = 'The machine has started!';
    console.log('Machine Started');
  } else {
    btn.textContent = 'Start machine';
    txt.textContent = 'The machine is stopped.';
    console.log('Machine Stopped');
  }
}