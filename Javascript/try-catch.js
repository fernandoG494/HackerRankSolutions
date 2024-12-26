function reverseString(s) {
  try {
    console.log(s.split("").reverse().join(""));
  } catch (error) {
    console.log(`s.split is not a function\n${s}`);
  }
}

// console.log(reverseString("1234"));
console.log(Number(1234));
