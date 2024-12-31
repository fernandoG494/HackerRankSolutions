var createCounter = function (init) {
  let currentValue = init;

  return {
    increment: () => ++currentValue,
    decrement: () => --currentValue,
    reset: () => {
      currentValue = init;
      return currentValue;
    },
  };
};

const init = 5;
const calls = ["increment", "reset", "decrement"];

const counter = createCounter(5);

console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
