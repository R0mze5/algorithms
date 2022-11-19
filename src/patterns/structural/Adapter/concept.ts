// Adapter Concept Sample Code

/**
In this concept source code, there are two classes, ClassA and ClassB, with different method signatures. Let's consider that ClassA provides the most compatible and preferred interface for the client.

I can create objects of both classes in the client, and it works. But before using each objects method, I need to do a conditional check to see which type of class it is that I am calling since the method signatures are different.

It means that the client is doing extra work. Instead, I can create an Adapter interface for the incompatible ClassB, that reduces the need for the extra conditional logic.
 */

interface IA {
  methodA(): void;
}

class ClassA implements IA {
  methodA() {
    console.log("method A");
  }
}

interface IB {
  methodB(): void;
}

class ClassB implements IB {
  methodB() {
    console.log("method B");
  }
}

export class ClassBAdapter implements IA {
  // ClassB does not have a methodA, so we can create an adapter

  #classB: ClassB;

  constructor() {
    this.#classB = new ClassB();
  }

  methodA() {
    "calls the class b method_b instead";

    this.#classB.methodB();
  }
}

// The Client
// Before the adapter I need to test the objects class to know which
// method to call.
const ITEMS = [new ClassA(), new ClassB()];
ITEMS.forEach((item) => {
  if (item instanceof ClassB) {
    item.methodB();
  } else {
    item.methodA();
  }
});

// After creating an adapter for ClassB I can reuse the same method
// signature as ClassA (preferred)
const ADAPTED = [new ClassA(), new ClassBAdapter()];
ADAPTED.forEach((item) => {
  item.methodA();
});
