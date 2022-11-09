/**
 * Concrete Creator: The client application, class or method that calls the Creator (Factory method).
 *
 * Product Interface: The interface describing the attributes and methods that the Factory will require in order to create the final product/object
 *
 * Creator: The Factory class. Declares the Factory method that will return the object requested from it
 *
 * Concrete Product: The object returned from the Factory. The object implements the Product interface
 */

interface ProductProperties {
  name: string;
}

export interface ProductA {
  name: string;
  getProperties(): ProductProperties;
}

class ConcreteProduct implements ProductA {
  name = "";

  createObject(): ProductA {
    return this;
  }

  getProperties() {
    return {
      name: this.name,
    };
  }
}

class ConcreteProductA extends ConcreteProduct {
  constructor() {
    super();
    this.name = "ConcreteProductA";
  }
}

class ConcreteProductB extends ConcreteProduct {
  constructor() {
    super();
    this.name = "ConcreteProductB";
  }
}

class ConcreteProductC extends ConcreteProduct {
  constructor() {
    super();
    this.name = "ConcreteProductC";
  }
}

export class FactoryA {
  static createObject(someProperty: string): ProductA {
    if (someProperty === "a") {
      return new ConcreteProductA();
    }

    if (someProperty === "b") {
      return new ConcreteProductB();
    }

    return new ConcreteProductC();
  }
}

// the client
const PRODUCT = FactoryA.createObject("b");
console.log(PRODUCT.name);
