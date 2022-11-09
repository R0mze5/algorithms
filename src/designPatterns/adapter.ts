/**
 * Adapter design pattern
 *
 * solves problems:
 * 1) How can a class be reused that does not have an interface that a client requires
 * 2) How can classes that have incompatible interfaces work together
 * 3) How can an alternative interface to be provided for a class
 *
 * Terminology:
 *
 * Target: The domain specific interface or class that needs to be adapted.
 *
 * Adapter interface: The interface of the target that the adapter will need to implement,
 *
 * Adapter: The concrete adapter class containing the adaption process.
 *
 * Client: The client application that will use the Adapter
 */

interface IA {
  methodA(): void;
}

class ClassA implements IA {
  methodA(): void {
    console.log("method A");
  }
}

interface IB {
  methodB(): void;
}

class ClassB implements IB {
  methodB(): void {
    console.log("method B");
  }
}

export class ClassBAdapter implements IA {
  #classB: ClassB;

  constructor() {
    this.#classB = new ClassB();
  }

  methodA(): void {
    this.#classB.methodB();
  }
}

const ITEMS = [new ClassA(), new ClassB()];
ITEMS.forEach((item) => {
  if (item instanceof ClassB) {
    item.methodB();
  } else {
    item.methodA();
  }
});

const ADAPTED = [new ClassA(), new ClassBAdapter()];
ADAPTED.forEach((item) => {
  item.methodA();
});
