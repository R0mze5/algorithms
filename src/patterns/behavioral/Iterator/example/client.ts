// The Iterator Pattern Concept

/**
The iterator in this brief example will return the next number in the iterator multiplied by 2 modulus 11. It dynamically creates the returned object (number) at runtime.

It has no hasNext() method since the result is modulated by 11, that will loop the results no matter how large the iterator index is. Furthermore, it will also appear to alternate between a series of even numbers and odd numbers.

Also, just to demonstrate that implementing abstract classes and interfaces is not always necessary, this example uses no abstract base classes or interfaces.
 */

export class NumberWheel {
  // The concrete iterator (iterable)

  index: number;

  constructor() {
    this.index = 0;
  }

  next() {
    // Return a new number next in the wheel
    this.index += 1;
    return (this.index * 2) % 11;
  }
}

// The Client
const NUMBERWHEEL = new NumberWheel();

for (let i = 0; i < 22; i++) {
  process.stdout.write(`${NUMBERWHEEL.next()} `);
}
