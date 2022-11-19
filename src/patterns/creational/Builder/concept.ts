// Builder Concept Sample Code

/**
Client creates the Director.
The Client calls the Directors construct() method that manages each step of the build process.
The Director returns the product to the client or alternatively could also provide a method for the client to retrieve it later.
 */

class Product {
  parts: string[] = [];
}

interface IBuilder {
  buildPartA(): this;
  buildPartB(): this;
  buildPartC(): this;
  getResult(): Product;
}

export class Builder implements IBuilder {
  // The Concrete Builder
  product: Product;

  constructor() {
    this.product = new Product();
  }

  buildPartA() {
    this.product.parts.push("a");
    return this;
  }

  buildPartB() {
    this.product.parts.push("b");
    return this;
  }

  buildPartC() {
    this.product.parts.push("c");
    return this;
  }

  getResult() {
    return this.product;
  }
}

class Director {
  // The Director, building a complex representation

  static construct() {
    "Constructs and returns the final product";

    return new Builder().buildPartA().buildPartB().buildPartC().getResult();
  }
}

// The Client
const PRODUCT1 = Director.construct();
console.log(PRODUCT1.parts);
