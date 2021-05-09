import { ITreeNode } from "@types";
import { recursiveTreeTraversal, iterationTreeTraversal } from "../src/tree/treeTraversal";

const tree: Array<ITreeNode> = [
  {
    v: 5,
    c: [
      { v: 10, c: [{ v: 11 }] },
      { v: 7, c: [{ v: 5, c: [{ v: 1 }] }] },
    ],
  },
  {
    v: 5,
    c: [{ v: 10 }, { v: 15 }],
  },
];

beforeAll(() => {
  global.console.log = jest.fn();
});

afterAll(() => {
  jest.resetAllMocks();
});

describe("Recursive Tree Traversal", () => {
  it.todo("should find existed path");
});
describe("Iteration Tree Traversal", () => {
  it.todo("should find existed path");
});
