// variables outside of a function is called a global scope 

const defaultResult = 0;
let result = defaultResult;

result = (result + 10) * 3 / 2 - 1;

let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';

// back ticks `...` work as strings, they give you access to a specific syntax ${} ... to get a value you have to use ${insert your variable name here or an equation itself ...(e.g - ${1+1})

outputResult(result, calculationDescription);

// a function is a statement 

function add(num1, num2) {
  const totalResult = num1 + num2;
  return result;
} 

result = add(3, 5);