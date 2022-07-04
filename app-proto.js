//functions prototype
Counter.prototype.increase = function () {
  // console.log(this);
  this.value++;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.decrease = function () {
  this.value--;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDOM.textContent = this.value;
};

//contructor function
function Counter(element, value) {
  this.counter = element;
  this.value = value;
  this.resetBtn = element.querySelector('.reset');
  this.increaseBtn = element.querySelector('.increase');
  this.decreaseBtn = element.querySelector('.decrease');
  //overwrite span element value with textContent
  this.valueDOM = element.querySelector('.value');
  this.valueDOM.textContent = this.value;
  /*add event listeners to our buttons
  first option is to use bind to point to counter 
  as 'this' in callback points to button
  this.increaseBtn.addEventListener('click', this.increase.bind(this));*/

  //========================================

  //bind this to all functions
  this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);

  this.increaseBtn.addEventListener('click', this.increase);
  this.decreaseBtn.addEventListener('click', this.decrease);
  this.resetBtn.addEventListener('click', this.reset);
}

//two instances of Counter independant of each other
const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 300);

//function that gets an element if it exists
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `please check "${selection}" selector, no such element exists`
  );
}

// firstCounter.increase();
// firstCounter.reset();
// secondCounter.decrease();
