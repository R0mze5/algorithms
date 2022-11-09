/**
 *
 * Prototype interface: The interface that describes the clone() method.
 *
 * Prototype: The Object/Product that implements the Prototype interface.
 *
 * Client: The client application that uses and creates the Prototype
 *
 */

interface Prototype {
  clone(): this;
}

export class PrototypeClass implements Prototype {
  // field: number[];

  // eslint-disable-next-line no-useless-constructor
  constructor(public name: string, public field: number[]) {}

  clone(): this {
    // shallow copy
    return { ...this };
    // deep copy
    // return JSON.parse(JSON.stringify(this));
  }
}

// const a = new PrototypeClass([]);
