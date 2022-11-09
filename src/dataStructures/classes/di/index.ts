/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */

import { IOutput } from "./types";

export class CliOutput {
  print(message: string) {
    console.log(message);
  }
}

export class Dog {
  constructor(private output: IOutput) {}

  bark(message: string) {
    if (typeof this.output?.print === "function") {
      this.output.print(message);
    }
  }
}

export class DogService {
  createDog() {
    const output = new CliOutput();
    const dog = new Dog(output);
    dog.bark("bow-wow1");
  }
}
