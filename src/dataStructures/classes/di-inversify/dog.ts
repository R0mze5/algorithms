import { injectable, inject } from "inversify";
import { IOutput } from "./interfaces";
import { TYPES } from "./types";

@injectable()
export class Dog {
  constructor(@inject(TYPES.IOutput) private output: IOutput) {}

  bark(message: string) {
    if (typeof this.output?.print === "function") {
      this.output.print(message);
    }
  }
}
