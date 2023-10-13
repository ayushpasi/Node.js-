const arr = ["apple", "oranges", " ", "mango", " ", "lemon"];

console.log(
  arr.map((fruit, i) => {
    if (fruit == " ") {
      return "empty string";
    }
    return fruit;
  })
);
