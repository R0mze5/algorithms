import IAbstractExpression from "./iabstract-expression";

export default class Numeral implements IAbstractExpression {
  // Terminal Expression

  value: number;

  constructor(value: string | number) {
    this.value = typeof value === "string" ? parseInt(value, 10) : value;
  }

  interpret(): number {
    return this.value;
  }
}
