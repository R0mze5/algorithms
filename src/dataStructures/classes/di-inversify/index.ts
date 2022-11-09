import { myContainer } from "./inversify.config";

import { TYPES } from "./types";

import { Dog } from "./dog";

class Index {
  createDog() {
    const dog = myContainer.get<Dog>(Types.Dog);
    dog.bark("bow-wow");
  }
}

const dogService = new Index();
dogService.createDog();
