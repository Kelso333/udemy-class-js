
// a variable outside of a function is called a global scope - a variable inside a function is called a local scope  

// back ticks `...` work as strings, they give you access to a specific syntax ${} ... to get a value you have to use ${insert your variable name here or an equation itself ...(e.g - ${1+1})

const defaultResult = 0;
let result = defaultResult;

// a function is a statement 
function add() {
  result = result + userInput.value;
  outputResult(result, '');
} 

addBtn.addEventListener('click', add);



