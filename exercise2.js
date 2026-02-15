const swatches = document.querySelectorAll('.swatch');

function applyColor() {
  this.style.backgroundColor = this.dataset.color;
}

swatches.forEach(swatch => {
  swatch.addEventListener('click', applyColor);
});
