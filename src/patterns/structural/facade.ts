class SubsystemClassA {
  method(): string {
    return "A";
  }
}
class SubsystemClassB {
  method(value: string): string {
    return value;
  }
}
class SubsystemClassC {
  method(value: { C: number[] }): { C: number[] } {
    return value;
  }
}

export class Facade {
  subsystemClassA(): string {
    return new SubsystemClassA().method();
  }

  subsystemClassB(value: string): string {
    return new SubsystemClassB().method(value);
  }

  subsystemClassC(value: { C: number[] }): { C: number[] } {
    return new SubsystemClassC().method(value);
  }
}
