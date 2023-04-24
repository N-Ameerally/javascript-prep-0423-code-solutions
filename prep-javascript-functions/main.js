function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('Add two numbers:', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
const minutes = convertHoursToMinutes(2);
console.log('hours converted to minutes:', minutes);

function getGreeting(name) {
  const greeting = 'Hello ' + name + '!';
  return greeting;
}
const greeting = getGreeting('nadine');
console.log('greeting:', greeting);

function addAndMultiplyBy5(num1, num2) {
  const sum = num1 + num2;
  const result = sum * 5;
  return result;
}
const SumTimesFive = addAndMultiplyBy5(10, 5);
console.log('Add and multiply by 5:', SumTimesFive);

function multiplyAndDivideBy5(num1, num2) {
  const sum = num1 * num2;
  const result = sum / 5;
  return result;
}
const finalResult = multiplyAndDivideBy5(35, 10);
console.log('Multiply and divide by 5:', finalResult);

function subtractTwoNumbers(num1, num2) {
  const result = num1 - num2;
  return result;
}

const result = subtractTwoNumbers(22, 7);
console.log('Subtract two numbers:', result);

function getCircleCircumference(radius) {
  const result = 2 * Math.PI * radius;
  return result;
}
const circumference = getCircleCircumference(5);
console.log('circle circumference:', circumference);

function getFullName(firstName, lastName) {
  const result = firstName + '' + lastName;
  return result;
}
const fullName = getFullName('Nadine', 'Ameerally');
console.log('full name:', fullName);

function cube(number) {
  const result = number * number * number;
  return result;
}
const cubeResult = cube(5);
console.log('Cube:', cubeResult);
