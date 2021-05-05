import { binarySearch, binaryRecursiveSearch } from "../src/search/binary";
import { linearSearch } from "../src/search/linear";

const array = [1, 5, 2, 7, 3, 9, 8];
const sortedArray = array.sort();

const searchableValue = 7;

beforeAll(() => {
  global.console.log = jest.fn();
});

afterAll(() => {
  jest.resetAllMocks();
});

describe("linear search", () => {
  it("should find index of existed searchable element", () => {
    expect(linearSearch(array, searchableValue)).toBe(array.indexOf(searchableValue));
  });

  it.todo("should return -1 index of inexistent searchable element");
});

describe("binary search", () => {
  it("should find index of existed searchable element", () => {
    expect(binarySearch(sortedArray, searchableValue)).toBe(array.indexOf(searchableValue));
  });
  it.todo("should return -1 index of inexistent searchable element");
});

describe("binary recursive search", () => {
  it.todo("should find index of existed searchable element");
  it.todo("should return -1 index of inexistent searchable element");
});
