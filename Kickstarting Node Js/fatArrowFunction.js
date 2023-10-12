const product = (a, b) => {
  return a * b;
};
product(2, 3);

const student = {
  name: "Ayush",
  age: 23,
  greet: function () {
    console.log("hello student:" + this.name);
  },
};
student.greet();
