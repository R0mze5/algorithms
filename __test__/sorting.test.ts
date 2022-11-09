import { bubbleSorting } from "../src/sorting/bubble";
import { quickSort } from "../src/sorting/quickSort";
import { selectionSort } from "../src/sorting/selectionSort";

const array = [1, 5, 2, 7, 3, -15, 0, 12, -35, 9, 8];
const sortedArray = [...array].sort((a, b) => a - b);

beforeAll(() => {
  global.console.log = jest.fn();
});

afterAll(() => {
  jest.resetAllMocks();
});

describe("bubble sorting", () => {
  it("should sorting array", () => {
    expect(bubbleSorting([...array])).toStrictEqual(sortedArray);
  });
});

describe("selection sorting", () => {
  it("should sorting array", () => {
    expect(selectionSort([...array])).toStrictEqual(sortedArray);
  });
});

describe("quick sorting", () => {
  it("should sorting array", () => {
    expect(quickSort([...array])).toStrictEqual(sortedArray);
  });
});
