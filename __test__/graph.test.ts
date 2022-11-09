import { TDijkstraGraphNode, TGraphNode, TGraphNodeName } from "@types";
import { breadthFirstSearch } from "../src/graph/breadthFirstSearch";
// import { dijkstraSearch } from "../src/graph/dijkstraSearch";
import { BinaryTreeSearch } from "../src/graph/binaryTreeSearch";

const graph: Record<TGraphNodeName, TGraphNode> = {};

graph.a = ["b", "c"];
graph.b = ["f"];
graph.c = ["d", "e"];
graph.d = ["f"];
graph.e = ["f"];
graph.f = ["g"];

// const adjacencyMatrix = [
//   [0, 1, 1, 0, 0, 0, 0],
//   [0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 1, 0, 1, 0],
//   [0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 1],
//   [0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
// ];

const dijkstraGraph: Record<TGraphNodeName, TDijkstraGraphNode> = {};
dijkstraGraph.a = { b: 2, c: 1 };
dijkstraGraph.b = { f: 7 };
dijkstraGraph.c = { d: 5, e: 2 };
dijkstraGraph.d = { f: 2 };
dijkstraGraph.e = { f: 1 };
dijkstraGraph.f = { g: 1 };
dijkstraGraph.g = {};

const mockLog = jest.fn();

beforeEach(() => jest.clearAllMocks());

beforeAll(() => {
  global.console.log = mockLog;
});

afterAll(() => {
  jest.resetAllMocks();
});

describe("Breadth-first search", () => {
  it("should find existed path", () => {
    expect(breadthFirstSearch(graph, "a", "g")).toBeTruthy();
  });

  it("should not find inexistent path", () => {
    expect(breadthFirstSearch(graph, "a", "h")).toBeFalsy();
  });
});

describe("Dijkstra's search", () => {
  it.todo("should find existed path");
  it.todo("should not find inexistent path");
});

describe("binary tree search", () => {
  const binaryTree = new BinaryTreeSearch();

  const binaryValues = [5, 2, 6, 2, 1];

  binaryValues.forEach((value) => binaryTree.add(value));

  it("should print all added values", () => {
    binaryTree.print();
    expect(mockLog).toBeCalledTimes(binaryValues.length);
  });
});
