class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  perimeter() {
    let initialValue = 0;
    return this.sides.reduce((acc, value) => {
      return (acc += value);
    }, initialValue);
  }
}

const rectangle = new Polygon([10, 20, 10, 20]);

console.log(rectangle.perimeter());
