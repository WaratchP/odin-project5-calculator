const add      = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide   = (num1, num2) => num2 != 0 ? num1 / num2 
                                           : 'ERROR';
const mod      = (num1, num2) => num2 != 0 ? num1 % num2
                                           : 'ERROR';

export const operate = (operator, num1, num2) => {
    switch(operator) {
        case "add"     : return add(num1, num2); 
        case "subtract": return subtract(num1, num2); 
        case "multiply": return multiply(num1, num2);
        case "divide"  : return divide(num1, num2); 
        case "mod"     : return mod(num1, num2); 
    }
}
