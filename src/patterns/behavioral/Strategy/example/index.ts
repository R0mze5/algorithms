/* eslint-disable no-param-reassign */
/**
 * @description - A game character is moving through an environment. Depending on the situation within the current environment, the user decides to use a different movement algorithm. From the perspective of the object/context, it is still a move, but the implementation is encapsulated in the subclass at the handle.

In a real game, the types of things that a particular move could affect is which animation is looped, the audio, the speed, the camera follow mode and more.
 */

interface IMove {
  // The Move Strategy Interface
  move(position: [number, number]): void;
}

interface IMoveConstructor {
  // A Constructor for the IMove
  new (): IMove;
}

// The Strategy Pattern Example Use Case

export class GameCharacter {
  // This is the context whose strategy will change

  #position: [number, number] = [0, 0];

  move(MovementStyle: IMoveConstructor) {
    // The movement algorithm has been decided by the client
    new MovementStyle().move(this.#position);
  }
}

class Walking implements IMove {
  // A concrete movement strategy for walking

  move(position: [number, number]) {
    position[0] += 1;
    console.log(`I am Walking. New position = ${position}`);
  }
}

class Sprinting implements IMove {
  // A concrete movement strategy for sprinting

  move(position: [number, number]) {
    position[0] += 2;
    console.log(`I am Running. New position = ${position}`);
  }
}

class Crawling implements IMove {
  // A concrete movement strategy for crawling

  move(position: [number, number]) {
    position[0] += 0.5;
    console.log(`I am Crawling. New position = ${position} `);
  }
}

// The Client
const GAME_CHARACTER = new GameCharacter();

GAME_CHARACTER.move(Walking);
// Character sees the enemy
GAME_CHARACTER.move(Sprinting);
// Character finds a small cave to hide in
GAME_CHARACTER.move(Crawling);
