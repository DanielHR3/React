import { getOperatorsByUnit } from "./bases/08-imp-exp";
import { Unit } from "./data/operators.data";
import "./style.css";

//import './bases/01-const-let'
//import './bases/02-template-string'
//import './bases/03-objet-literal'
//import './bases/04-arrays'
//import './bases/05-functions'
//import './bases/06-obj-destructuring'
//import './bases/07-array-desestructuring'
//import './bases/08-imp-exp'

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  <h1>Hola mundo</h1>
  </div>
`;

// Replace "DEVGRU" with a valid Unit value, for example:
console.log(getOperatorsByUnit(Unit.SEAL_Team_6));
