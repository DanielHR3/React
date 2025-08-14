import { operators, type Operator, Unit } from "../data/operators.data";

const getOperators = (id: number): Operator | undefined => {
  const operator = operators.find((operator) => {
    return operator.id === id;
  });
  // if (!operator) {
  //   throw new Error(`No existe un operador con el id ${id}`);
  // }

  return operator;
};

//console.log(getOperators(5)); // { id: 5, codename: 'Havoc', unit: 'SEAL Team 6' }

export const getOperatorsByUnit = (unit: Unit) => {
  return operators.filter((operator) => operator.unit === unit);
};
