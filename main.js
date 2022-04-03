import { addCalculator, 
         addOperator  ,
         updateDisplay   } from "./modules/element.js";
import { operate } from "./modules/operator.js";

let currentNum = 0;
let savedNum = 0;
let currentOperator = "";

addCalculator();
addOperator('add');
