/* eslint-disable class-methods-use-this */
/**
 * Decorator design pattern is a structural pattern, that allows to attach additional responsibilities to an object at runtime.
 *
 * Component Interface: An interface for object.
 *
 * Component: The object that may be decorated.
 *
 * Decorator: The class that applies the extra responsibilities to the component being decorated. It also implements the same component interface.
 */

interface IComponent {
  method(): string;
}

class Component implements IComponent {
  method(): string {
    return "Component method";
  }
}

export class Decorator implements IComponent {
  #object: IComponent;

  constructor(object: IComponent) {
    this.#object = object;
  }

  method(): string {
    return `Decorator Method(${this.#object.method()})`;
  }
}

const component = new Component();
console.log(component.method()); // Component method

const decorated = new Decorator(component);
console.log(decorated.method()); // Decorator Method(Component method)

// example

interface IValue {
  value: number;
}

class _Value implements IValue {
  value: number;

  constructor(value: number) {
    this.value = value;
  }
}

function Value(value: number) {
  return new _Value(value);
}

class _Add implements IValue {
  value: number;

  constructor(val1: IValue | number, val2: IValue | number) {
    const left = typeof val1 === "number" ? val1 : val1.value;
    const right = typeof val2 === "number" ? val2 : val2.value;

    this.value = left + right;
  }
}

function Add(val1: IValue | number, val2: IValue | number): IValue {
  return new _Add(val1, val2);
}

class _Sub implements IValue {
  value: number;

  constructor(val1: IValue | number, val2: IValue | number) {
    const left = typeof val1 === "number" ? val1 : val1.value;
    const right = typeof val2 === "number" ? val2 : val2.value;

    this.value = left - right;
  }
}

function Sub(val1: IValue | number, val2: IValue | number): IValue {
  return new _Sub(val1, val2);
}

console.log(Add(Sub(3, Value(2)), Value(8)).value);
