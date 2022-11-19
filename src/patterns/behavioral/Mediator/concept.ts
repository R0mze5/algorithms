// Mediator Concept Sample Code

/**
In the example concept, there are two colleague classes that use each other's methods. Instead of the Colleagues calling each other's methods directly, they implement the Mediator interface and call each other via the Mediator. Each colleague is designed for a different purpose, but they utilize some related functionality from each other.

The system, in this case, would work without the Mediator, but adding the Mediator would allow extending functionality to a potential third colleague that provides a different service, such as AI analysis or monitoring, without needing to add specific support or knowledge into the two original colleagues.

In this first example the Mediator is structurally acting as a multi-directional relay between the two colleagues.
 */

class Colleague1 {
  // This Colleague provides data for Colleague2

  method1() {
    return "Here is the Colleague1 specific data you asked for";
  }
}

class Colleague2 {
  // This Colleague provides data for Colleague1

  method2() {
    return "Here is the Colleague2 specific data you asked for";
  }
}

export class Mediator {
  // The Mediator Concrete Class
  colleague1: Colleague1;

  colleague2: Colleague2;

  constructor() {
    this.colleague1 = new Colleague1();
    this.colleague2 = new Colleague2();
  }

  colleague1Method() {
    // Calls the method provided by Colleague1
    return this.colleague1.method1();
  }

  colleague2Method() {
    // Calls the method provided by Colleague2
    return this.colleague2.method2();
  }
}

// The Client
const MEDIATOR = new Mediator();

// Colleague1 wants some data from Colleague2
let DATA = MEDIATOR.colleague2Method();
console.log(`COLLEAGUE1 <--> ${DATA}`);

// Colleague2 wants some data from Colleague1
DATA = MEDIATOR.colleague1Method();
console.log(`COLLEAGUE2 <--> ${DATA}`);
