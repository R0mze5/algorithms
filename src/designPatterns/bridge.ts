/* eslint-disable no-use-before-define */
/**
 * Bridge design pattern
 *
 * Terminology:
 *
 * Abstraction Interface: An interface implemented by the refined abstraction describing the common methods to implement.
 *
 * Refined Abstraction: A refinement of an idea into another class or two. The classes should implement the Abstraction Interface and assign which concrete implementer.
 *
 * Implementer Interface: The implementer interface: The implementer interface that concrete implementers implement.
 *
 * Concrete Implementer: The implementation logic that the refined abstraction will use.
 */

interface IAbstraction {
  method(value: string[]): void;
}

class RefinedAbstraction implements IAbstraction {
  #implementer: IImplementer;

  constructor(implementer: IImplementer) {
    this.#implementer = implementer;
  }

  method(value: string[]): void {
    this.#implementer.method(value);
  }
}

interface IImplementer {
  method(value: string[]): void;
}

export class ConcreteImplementerA implements IImplementer {
  method(value: string[]): void {
    console.log(value);
  }
}

class ConcreteImplementerB implements IImplementer {
  method(value: string[]): void {
    value.forEach((item) => console.log(item));
  }
}

const VALUES = ["a", "b", "c"];

const REFINED_ABSTRACTION_A = new RefinedAbstraction(new ConcreteImplementerA());
REFINED_ABSTRACTION_A.method(VALUES);

const REFINED_ABSTRACTION_B = new RefinedAbstraction(new ConcreteImplementerB());
REFINED_ABSTRACTION_B.method(VALUES);
