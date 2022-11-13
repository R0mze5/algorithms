/**
 * The Command patterns is a behavioral design pattern, in which an abstraction exists between an object that invokes a command, and the object that perform it.
 *
 * Is a good pattern to implement undo/redo to application.
 *
 * Terminology:
 * Receiver: The object that will receive and execute the command.
 * Invoker: The object that sends the command to the receiver. E.g. A button.
 * Command Object: Itself, it object, that implements an execute, or action method, and contain all required information to execute it.
 * Client: The application or component that is aware of the Receiver, Invoker and Command.
 */

interface ICommand {
  execute(): void;
}

export class Invoker {
  #commands: { [id: string]: ICommand };

  constructor() {
    this.#commands = {};
  }

  register(commandName: string, command: ICommand) {
    this.#commands[commandName] = command;
  }

  execute(commandName: string) {
    if (commandName in this.#commands) {
      this.#commands[commandName].execute();
    } else {
      console.log(`Command ${commandName} not recognized`);
    }
  }
}

class Receiver {
  runCommand1() {
    console.log("Executing command 1");
  }

  runCommand2() {
    console.log("Executing command 1");
  }
}

class Command1 implements ICommand {
  #receiver: Receiver;

  constructor(receiver: Receiver) {
    this.#receiver = receiver;
  }

  execute(): void {
    this.#receiver.runCommand1();
  }
}

class Command2 implements ICommand {
  #receiver: Receiver;

  constructor(receiver: Receiver) {
    this.#receiver = receiver;
  }

  execute(): void {
    this.#receiver.runCommand2();
  }
}

const RECEIVER = new Receiver();

const COMMAND1 = new Command1(RECEIVER);
const COMMAND2 = new Command2(RECEIVER);

const INVOKER = new Invoker();
INVOKER.register("1", COMMAND1);
INVOKER.register("2", COMMAND2);

INVOKER.execute("1");
INVOKER.execute("2");

// example:

class Light {
  turnOn(): void {
    console.log("Light turn on");
  }

  turnOff(): void {
    console.log("Light turn off");
  }
}

interface ISwitchCommand {
  execute(): void;
}

class SwitchOnCommand implements ISwitchCommand {
  #light: Light;

  constructor(light: Light) {
    this.#light = light;
  }

  execute() {
    this.#light.turnOn();
  }
}
class SwitchOffCommand implements ISwitchCommand {
  #light: Light;

  constructor(light: Light) {
    this.#light = light;
  }

  execute() {
    this.#light.turnOff();
  }
}

class Switch {
  #commands: { [id: string]: ICommand };

  #history: [number, string][];

  constructor() {
    this.#commands = {};
    this.#history = [];
  }

  showHistory() {
    this.#history.forEach((row) => {
      console.log(`${row[0]} : ${row[1]}`);
    });
  }

  register(commandName: string, command: ISwitchCommand) {
    this.#commands[commandName] = command;
  }

  execute(commandName: string) {
    if (commandName in this.#commands) {
      this.#commands[commandName].execute();
      this.#history.push([Date.now(), commandName]);
    } else {
      console.log(`Command ${commandName} not recognized`);
    }
  }

  replayLast(numberOfCommands: number): void {
    const commands = this.#history.slice(
      this.#history.length - numberOfCommands,
      this.#history.length
    );

    commands.forEach((command) => this.#commands[command[1]].execute());
  }
}

const LIGHT = new Light();

const SWITCH_ON = new SwitchOnCommand(LIGHT);
const SWITCH_OFF = new SwitchOffCommand(LIGHT);

const SWITCH = new Switch();

SWITCH.register("ON", SWITCH_ON);
SWITCH.register("OFF", SWITCH_OFF);

SWITCH.execute("ON");
SWITCH.execute("OFF");
SWITCH.execute("ON");
SWITCH.execute("OFF");

// show history
SWITCH.showHistory();

SWITCH.replayLast(2);
