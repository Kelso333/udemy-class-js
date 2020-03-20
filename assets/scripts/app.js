
const defaultResult = 0;
let result = defaultResult;

result = (result + 10) * 3 / 2 - 1;

let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';

// back ticks `...` work as strings, they give you access to a specific syntax ${}... to get a value you have to use ${insert your variable name here or an equation itself ..(e.g- ${1+1})

outputResult(result, calculationDescription);