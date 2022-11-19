// Singleton Concept Sample Code

/**
In the source code below, when the Singleton constructor is called, it checks if the static instance property has already been set. If so, then instead of creating a new instance of a Singleton, it will return the reference to the first Singleton created.

See how when I create the two Objects (Singletons), I am also passing in a number to the constructor that I can use to act as some kind of ID. At the end of the code, I log the IDs for both Singleton objects, and they both return the number 1. This indicates that OBJECT2 is really just OBJECT1 behind the scenes.

A Singleton is not the same as a class containing all static properties and methods, but you could create a class of static properties and methods instead if it achieved the same purpose that you needed of controlling access to a single resource. The real difference here is in the constructor of this Singleton example in how it returns a reference to the original instance instead of creating a second, or third instance. The reason for using a Singleton would be that your Singleton can implement an interface or derive from a base class, and also the Singleton isn't actually instantiated in memory until the first time it is created when using the new keyword.
 */

export class Singleton {
  // The Singleton Class
  static instance: Singleton;

  id: number;

  constructor(id: number) {
    this.id = id;
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
  }
}

// The Client
// All uses of the singleton point to the same original object

const OBJECT1 = new Singleton(1); // setting its id property to 1
const OBJECT2 = new Singleton(2); // setting its id property to 2

console.log(OBJECT1 === OBJECT2); // = true
console.log(OBJECT1.id); // returns 1
console.log(OBJECT2.id); // returns 1
