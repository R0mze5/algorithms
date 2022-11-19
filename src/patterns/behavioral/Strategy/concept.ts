// The Strategy Pattern Concept

/**
There is a Context and three different strategies to choose from.

Each Strategy is executed in turn by the context.
 */

interface IStrategy {
  // A strategy Interface
  method(): string;
}

interface IStrategyConstructor {
  // A Constructor for the IStrategy
  new (): IStrategy;
}

export class ObjectContext {
  // This is the object whose behavior will change

  request(StrategyConstructor: IStrategyConstructor) {
    // The request is handled by the class passed in
    return new StrategyConstructor();
  }
}

class ConcreteStrategyA implements IStrategy {
  // A Concrete Strategy Subclass

  method() {
    return "I am ConcreteStrategyA";
  }
}

class ConcreteStrategyB implements IStrategy {
  // A Concrete Strategy Subclass

  method() {
    return "I am ConcreteStrategyB";
  }
}

class ConcreteStrategyC implements IStrategy {
  // A Concrete Strategy Subclass

  method() {
    return "I am ConcreteStrategyC";
  }
}

// The Client
const OBJECT_CONTEXT = new ObjectContext();

console.log(OBJECT_CONTEXT.request(ConcreteStrategyA).method());
console.log(OBJECT_CONTEXT.request(ConcreteStrategyB).method());
console.log(OBJECT_CONTEXT.request(ConcreteStrategyC).method());
