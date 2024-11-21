function getLetter(s) {
  let letter;
  const firstChar = s.charAt(0);

  switch (firstChar) {
    case ["a", "e", "i", "o", "u"].find((a) => a == firstChar):
      letter = "A";
      break;
    case ["b", "c", "d", "f", "g"].find((a) => a == firstChar):
      letter = "B";
      break;
    case ["h", "j", "k", "l", "m"].find((a) => a == firstChar):
      letter = "C";
      break;
    case ["n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"].find(
      (a) => a == firstChar
    ):
      letter = "D";
      break;
  }

  return letter;
}

getLetter("adfgt");
