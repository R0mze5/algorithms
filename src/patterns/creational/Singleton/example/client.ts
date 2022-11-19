/**
In the example, there are three games created. They are all independent instances created from their own class, but they all share the same leaderboard. The leaderboard is a Singleton.

It doesn't matter how the Games where created, or how they reference the leaderboard, it is always a Singleton.

Each game independently adds a winner, and all games can read the altered leaderboard regardless of which game updated it.
 */
// Singleton Use Case Example Code

import { Game1 } from "./game1";
import { Game2 } from "./game2";
import { Game3 } from "./game3";

// The Client
// Despite all games instantiating a leaderboard, they all point
// to the same memory object since the leaderboard is a singleton.
const GAME1 = new Game1();
GAME1.addWinner(2, "Cosmo");

const GAME2 = new Game2();
GAME2.addWinner(3, "Sean");

const GAME3 = new Game3();
GAME3.addWinner(1, "Emmy");

GAME1.leaderboard.print();
GAME2.leaderboard.print();
GAME3.leaderboard.print();
