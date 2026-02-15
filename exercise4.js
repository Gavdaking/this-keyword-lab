const box = document.querySelector('.box');

// BUG EXPLANATION:
// Arrow functions do not have their own 'this'. Here, 'this' refers to the outer scope (likely window),
// not the element that was clicked. Therefore, 'this.classList.add' fails.

box.addEventListener('click', (event) => {
  event.currentTarget.classList.add('active'); // fix
});

// FIX EXPLANATION:
// event.currentTarget always refers to the element the listener is attached to,
// so it works like 'this' would in a regular function.
