function doSomthing() {
  console.log("hello");
}
function add(a, b) {
  const sum = a + b;
  return sum;
}

doSomthing();

const result = add(1, 2);
console.log(result);

const addFun = add;
console.log(add);
addFun(1, 2);
