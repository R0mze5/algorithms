// The State Use Case Example

/**
This example takes the concept example further and instead assigns then next state in sequence rather than choosing the states subclasses randomly.

It also allows to set the state outside the context by using a getter/setter.

The client will set the state, and then run a request, and then change the state again, etc., and depending on the state, the behavior of the method would have changed.
 */

interface IExampleState {
  // A State Interface
  request(): void;
}

// eslint-disable-next-line no-shadow
enum ExampleState {
  Initializing = "Initializing",
  Started = "Started",
  Running = "Running",
  Finished = "Finished",
}

export class StateContext implements IExampleState {
  #state: ExampleState;

  constructor() {
    this.#state = ExampleState.Initializing;
  }

  public get state() {
    return this.#state;
  }

  public set state(value: ExampleState) {
    switch (value) {
      case ExampleState.Started:
        this.request = Started.prototype.request;
        break;
      case ExampleState.Running:
        this.request = Running.prototype.request;
        break;
      case ExampleState.Finished:
        this.request = Finished.prototype.request;
        break;
      default:
        break;
    }
    this.#state = value;
  }

  request() {
    // Does nothing until state changes, when then
    // this method handle is reassigned to a different
    // concrete states request method
  }
}

class Started implements IExampleState {
  // A ConcreteState Subclass
  request() {
    console.log(`I am now Started`);
  }
}

class Running implements IExampleState {
  // A ConcreteState Subclass
  request() {
    console.log(`I am now Running`);
  }
}

class Finished implements IExampleState {
  // A ConcreteState Subclass
  request() {
    console.log(`I am now Finished`);
  }
}

// The Client
const STATE_CONTEXT = new StateContext();
console.log(`STATE_CONTEXT = ${STATE_CONTEXT.state}`);
STATE_CONTEXT.state = ExampleState.Started;
STATE_CONTEXT.request();
STATE_CONTEXT.state = ExampleState.Running;
STATE_CONTEXT.request();
STATE_CONTEXT.state = ExampleState.Finished;
STATE_CONTEXT.request();
STATE_CONTEXT.state = ExampleState.Started;
STATE_CONTEXT.request();
STATE_CONTEXT.state = ExampleState.Running;
STATE_CONTEXT.request();
STATE_CONTEXT.state = ExampleState.Finished;
STATE_CONTEXT.request();
