function whileLoop1() {
  const newArray = [];
  let i = 0;
  while (i < 10) {
    newArray.push(i);
    i++;
  }
  return newArray;
}
console.log(whileLoop1(10));

function whileLoop2() {
  const newArray = [];
  let i = 0;
  while (i < 10) {
    newArray.push(i * 2);
    i++;
  }
  return newArray;
}
console.log(whileLoop2(18));

function forLoop1() {
  const newArray = [];
  for (let i = 0; i < 10; i++) {
    newArray.push(i);
  }
  return newArray;
}
console.log(forLoop1());

function forLoop2() {
  for (let i = 99; i >= 0; i--) {
    console.log('Time till explosion:', +1);
  }
}
forLoop2();

function forInLoop1(object) {
  const newArray = [];
  for (const prop in object) {
    newArray.push(prop);
  }
  return newArray;
}
const object1 = {
  name: 'Nadine Ameerally',
  age: 24,
  hobby: 'coding',
  invention: 'gaming',
};
console.log(forInLoop1(object1));

function forInLoop2(object) {
  const newArray = [];
  for (const prop in object) {
    newArray.push(object[prop]);
  }
  return newArray;
}
console.log(forInLoop2(object1));
