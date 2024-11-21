const readLine = require("readline");

function getSecondLargest(nums) {
  // Complete the function
  const auxNums = nums.sort((a, b) => a - b);

  const last = auxNums.at(-1);
  const beforeLast = last - 1;

  if (auxNums.includes(beforeLast)) {
    return beforeLast;
  }

  return last;
}

function main() {
  const n = 10;
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  console.log(getSecondLargest(nums));
}

main();
