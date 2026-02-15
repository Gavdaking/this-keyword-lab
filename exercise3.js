const display = document.querySelector('#count-display');

const CounterApp = {
  count: 0,
  increment: function() {
    this.count++;
    display.textContent = this.count;
  },
  decrement: function() {
    this.count--;
    display.textContent = this.count;
  }
};

document.querySelector('#inc-btn').addEventListener('click', CounterApp.increment.bind(CounterApp));
document.querySelector('#dec-btn').addEventListener('click', CounterApp.decrement.bind(CounterApp));
