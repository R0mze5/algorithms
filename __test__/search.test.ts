import { binarySearch, binaryRecursiveSearch } from "../src/search/binary";
import { linearSearch } from "../src/search/linear";

const array = [1, 5, 2, 7, 3, 9, 8];
const sortedArray = array.sort();

const searchableValue = 7;
const searchableInexistValue = 10;

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

  it("should return -1 index of inexistent searchable element", () => {
    expect(linearSearch(array, searchableInexistValue)).toBe(array.indexOf(searchableInexistValue));
  });
});

describe("binary search", () => {
  it("should find index of existed searchable element", () => {
    expect(binarySearch(sortedArray, searchableValue)).toBe(array.indexOf(searchableValue));
  });
  it("should return -1 index of inexistent searchable element", () => {
    expect(binarySearch(array, searchableInexistValue)).toBe(array.indexOf(searchableInexistValue));
  });
});

describe("binary recursive search", () => {
  it("should find index of existed searchable element", () => {
    expect(binaryRecursiveSearch(sortedArray, searchableValue)).toBe(
      array.indexOf(searchableValue)
    );
  });
  it("should return -1 index of inexistent searchable element", () => {
    expect(binaryRecursiveSearch(array, searchableInexistValue)).toBe(
      array.indexOf(searchableInexistValue)
    );
  });
});
