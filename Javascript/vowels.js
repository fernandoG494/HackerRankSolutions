function vowelsAndConsonants(s) {
  let vowels = [];
  let consonants = [];

  s.split("").forEach((element) => {
    switch (element) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        vowels.push(element);
        break;
      default:
        consonants.push(element);
        break;
    }
  });

  vowels.forEach((letter) => console.log(letter));
  consonants.forEach((letter) => console.log(letter));
}

vowelsAndConsonants("abcdefghi");
