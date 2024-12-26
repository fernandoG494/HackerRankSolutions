function Rectangle(a, b) {
  var obj = {
    length: a,
    width: b,
    perimeter: 2 * (a + b),
    area: a * b,
  };

  return obj;
}

const rectangle = new Rectangle(3, 4);
