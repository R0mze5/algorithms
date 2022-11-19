/**
 * Terminology:
 * Flyweight Interface: An interface where a flyweight receives its extrinsic attributes.
 * Concrete Flyweight: The flyweight object that stores the intrinsic attributes and implements the interface to apply extrinsic attributes.
 * Unshared Flyweights: Not all flyweights will be shared, the flyweight enables sharing, not enforcing it. It also possible that flyweights can share other flyweights but still not yet be used in any context anywhere.
 * Flyweight Factory: Creates and manages flyweights at runtime. It reuses flyweights in memory, or creates a new one in demand.
 * Client: The client application that uses and create Flyweight.
 *
 */

interface IFlyweight {
  code: number;
}

class Flyweight implements IFlyweight {
  code: number;

  constructor(code: number) {
    this.code = code;
  }
}

export class FlyweightFactory {
  static flyweights: { [id: number]: Flyweight } = {};

  static getFlyweight(code: number): Flyweight {
    if (!(code in FlyweightFactory.flyweights)) {
      FlyweightFactory.flyweights[code] = new Flyweight(code);
    }

    return FlyweightFactory.flyweights[code];
  }

  static getCount(): number {
    return Object.keys(FlyweightFactory.flyweights).length;
  }
}

class AppContext {
  private codes: number[] = [];

  constructor(codes: string) {
    for (let i = 0; i < codes.length; i++) {
      this.codes.push(codes.charCodeAt(i));
    }
  }

  output() {
    let ret = "";

    this.codes.forEach((c) => {
      ret += String.fromCharCode(FlyweightFactory.getFlyweight(c).code);
    });

    return ret;
  }
}

const APP_CONTEXT = new AppContext("some_words");
console.log(APP_CONTEXT.output());
console.log(FlyweightFactory.getCount());
