const buttons = document.querySelectorAll('.color-btn');

function changeColor() {
  this.style.backgroundColor = 'yellow';
}

buttons.forEach(button => {
  button.addEventListener('click', changeColor);
});
