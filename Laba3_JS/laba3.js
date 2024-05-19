main();
function readNumber(message) {
  let input;
  do {
      input = prompt(message);
  } while (!input || isNaN(input));
  return parseFloat(input);
}
function readOperation() {
  let operation;
  do {
      operation = prompt("Enter operation (+, -, *, /):");
  } while (!operation || !"+-*/".includes(operation));
  return operation;
}
function calculate(num1, num2, operation) {
  let result;
  switch (operation) {
      case '+': result = num1 + num2;
          break;
      case '-': result = num1 - num2;
          break;
      case '*': result = num1 * num2;
          break;
      case '/':
          if (num2 === 0) {
              console.log("Error: division by zero.");
              return NaN;
          } result = num1 / num2;
          break;
      default:
          console.log("Error 444");
          return NaN;
  }
  return result;
}
function main() {
  let num1, num2, operation;
  do {
      num1 = readNumber("The first number:");
      num2 = readNumber("Second number:");
      operation = readOperation();
  } while (isNaN(num1) || isNaN(num2));

  let result = calculate(num1, num2, operation);
  console.log("Result:", result);
}
