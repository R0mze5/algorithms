// Memento pattern concept

/**
In the concept code, the client creates an object whose state will be periodically recorded. The object will be the Originator.

A Caretaker is also created with a reference to the Originator.

The Originators internal state is changed several times. It is then decided that the Caretaker should make a backup.

More changes are made to the Originator, and then another backup is made.

More changes are made to the Originator, and then it is decided that the first backup should be restored instead.

And then the second backup is restored.
 */

export class Memento {
  // A container of state
  state: string;

  constructor(state: string) {
    this.state = state;
  }
}

class Originator {
  // The Object in the application whose state changes

  #state: string;

  constructor() {
    this.#state = "";
  }

  public get state(): string {
    return this.#state;
  }

  public set state(value: string) {
    this.#state = value;
    console.log(`Originator: Set state to '${value}'`);
  }

  public get memento(): Memento {
    console.log("Originator: Providing Memento of state to caretaker.");
    return new Memento(this.#state);
  }

  public set memento(value: Memento) {
    this.#state = value.state;
    console.log(`Originator: State after restoring from Memento: '${this.#state}'`);
  }
}

class CareTaker {
  // Guardian. Provides a narrow interface to the mementos

  #originator: Originator;

  #mementos: Memento[];

  constructor(originator: Originator) {
    this.#originator = originator;
    this.#mementos = [];
  }

  create() {
    // Store a new Memento of the Originators current state
    console.log("CareTaker: Getting a copy of Originators current state");
    const { memento } = this.#originator;
    this.#mementos.push(memento);
  }

  restore(index: number) {
    // Replace the Originators current state with the state stored in the saved Memento
    console.log("CareTaker: Restoring Originators state from Memento");
    const memento = this.#mementos[index];
    this.#originator.memento = memento;
  }
}

// The Client
const ORIGINATOR = new Originator();
const CARETAKER = new CareTaker(ORIGINATOR);

// originators state can change periodically due to application events
ORIGINATOR.state = "State #1";
ORIGINATOR.state = "State #2";

// lets backup the originators
CARETAKER.create();

// more changes, and then another backup
ORIGINATOR.state = "State #3";
CARETAKER.create();

// more changes
ORIGINATOR.state = "State #4";
console.log(ORIGINATOR.state);

// restore from first backup
CARETAKER.restore(0);
console.log(ORIGINATOR.state);

// restore from second backup
CARETAKER.restore(1);
console.log(ORIGINATOR.state);
