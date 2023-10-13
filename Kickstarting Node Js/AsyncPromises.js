// console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 3000)

// setTimeout(() => console.log('d'), 0)

// console.log('e');
// a
// b
// c
// d
// e
function getC() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("c");
    }, 3000);
  });
}

function getD() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("d");
    }, 0);
  });
}

async function print() {
  console.log("a");
  console.log("b");

  let res = await getC();
  console.log(res);

  let res1 = await getD();
  console.log(res1);

  console.log("e");
}

print();
