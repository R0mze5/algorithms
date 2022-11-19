// Bridge Pattern Concept Sample Code

/**
 In the concept demonstration code, imagine that the classes were tightly coupled. The concrete class would print out some text to the console.

After abstracting the class along a common ground, it is now more versatile. The implementation has been separated from the abstraction, and now it can print out the same text in two different ways.

The benefit now is that each refined abstraction and implementer can now be worked on independently without affecting the other implementations.
 */

export interface IAbstraction {
  method(value: string[]): void;
}

class RefinedAbstractionA implements IAbstraction {
  #implementer: IImplementer;

  constructor(implementer: IImplementer) {
    this.#implementer = implementer;
  }

  method(value: string[]) {
    this.#implementer.method(value);
  }
}

class RefinedAbstractionB implements IAbstraction {
  #implementer: IImplementer;

  constructor(implementer: IImplementer) {
    this.#implementer = implementer;
  }

  method(value: string[]) {
    this.#implementer.method(value);
  }
}

interface IImplementer {
  method(value: string[]): void;
}

class ConcreteImplementerA implements IImplementer {
  method(value: string[]) {
    console.log(value);
  }
}

class ConcreteImplementerB implements IImplementer {
  method(value: string[]) {
    value.forEach((v) => console.log(v));
  }
}

// The Client
const VALUES = ["a", "b", "c"];

const REFINED_ABSTRACTION_A = new RefinedAbstractionA(new ConcreteImplementerA());
REFINED_ABSTRACTION_A.method(VALUES);

const REFINED_ABSTRACTION_B = new RefinedAbstractionB(new ConcreteImplementerB());
REFINED_ABSTRACTION_B.method(VALUES);
