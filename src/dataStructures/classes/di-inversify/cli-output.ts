import { injectable } from "inversify";
import { IOutput } from "./interfaces";

@injectable()
export class CliOutput implements IOutput {
  print(message: string) {
    console.log(message);
  }
}
