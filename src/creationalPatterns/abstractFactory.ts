/**
 *
 * The Abstract Factory Pattern adds an abstraction layer over multiple other creational pattern implementations.
 *
 * Client: The client application that calls the Abstract Factory. It's the same process as the Concrete Creator in the Factory design pattern.
 *
 * Abstract Factory: A common interface over all of the sup factories.
 *
 * Concrete Factory: The sub factory of the Abstract Factory and contain method(s) to allow creating Concrete Product.
 *
 * Abstract Product: The interface and/or abstraction for the product that the sub factory returns.
 *
 * Concrete Product: The object that is finally returned.
 *
 */

import { ProductA, FactoryA } from "./factory-a";
import { ProductB, FactoryB } from "./factory-b";

interface Product extends ProductA, ProductB {}

class AbstractFactory {
  // eslint-disable-next-line consistent-return
  static createObject(factory: string): Product | undefined {
    try {
      if (["aa", "ab", "ac"].indexOf(factory) > -1) {
        return FactoryA.createObject(factory[1]);
      }
      if (["ba", "bb", "bc"].indexOf(factory) > -1) {
        return FactoryB.createObject(factory[1]);
      }
      throw new Error("No factory found");
    } catch (error) {
      console.log(error);
    }
  }
}

const PRODUCT = AbstractFactory.createObject("ab");
console.log(PRODUCT);
