// The State Pattern Concept

/**
In the concept example, there are three possible states. Every time the request() method is called, the concrete state subclass is randomly selected by the context.
 */

interface IState {
  // A State Interface
  toString(): string;
}

class ConcreteStateA implements IState {
  // A ConcreteState Subclass

  toString() {
    return "I am ConcreteStateA";
  }
}

class ConcreteStateB implements IState {
  // A ConcreteState Subclass

  toString() {
    return "I am ConcreteStateB";
  }
}

class ConcreteStateC implements IState {
  // A ConcreteState Subclass

  toString() {
    return "I am ConcreteStateC";
  }
}

export class Context {
  // This is the object whose behavior will change
  #stateHandles: IState[];

  #handle: IState | undefined;

  constructor() {
    this.#stateHandles = [new ConcreteStateA(), new ConcreteStateB(), new ConcreteStateC()];
    this.#handle = undefined;
  }

  request() {
    // A method of the state that dynamically changes which
    // class it uses depending on the value of this.#handle
    this.#handle = this.#stateHandles[Math.floor(Math.random() * 3)];
    return this.#handle;
  }
}

// The Client
const CONTEXT = new Context();
console.log(CONTEXT.request());
console.log(CONTEXT.request());
console.log(CONTEXT.request());
console.log(CONTEXT.request());
console.log(CONTEXT.request());
