function isPositive(a) {
  if (a >= 1) {
    return "YES";
  }

  if (a === 0) {
    return "Zero Error";
  }

  if (a < 0) {
    return "Negative Error";
  }
}

console.log(isPositive(4));
console.log(isPositive(0));
console.log(isPositive(-4));
