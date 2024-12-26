function getCount(objects) {
  let counter = 0;

  objects.forEach((elements) => {
    if (elements[0] == elements[1]) {
      counter++;
    }
  });

  return counter;
}

function main() {
  let objects = [
    [1, 1],
    [2, 3],
    [3, 3],
    [3, 4],
    [4, 5],
  ];

  console.log(getCount(objects));
}

main();
