import { operators, Operator } from "../data/operators.data";

const getOperators = (id: number): Operator | undefined => {
  const operator = operators.find((operator) => {
    return operator.id === id;
  });
  if (!operator) {
    throw new Error(`No existe un operador`);
  }

  return operator;
};
