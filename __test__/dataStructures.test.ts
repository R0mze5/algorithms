import { LinkedList } from "../src/dataStructures/linkedList";

const mockLog = jest.fn();

beforeAll(() => {
  global.console.log = mockLog;
});

beforeEach(() => jest.clearAllMocks());
afterAll(() => {
  jest.resetAllMocks();
});

describe("linked list", () => {
  const list = new LinkedList();
  const elementsCount = 4;

  for (let i = 1; i <= elementsCount; i++) {
    list.add(i);
  }

  it("should return count of added elements", () => {
    expect(list.getSize()).toBe(elementsCount);
  });

  it("should add element to linked list", () => {
    list.add(elementsCount + 1);
    expect(list.getSize()).toBe(elementsCount + 1);
  });

  it("should call console.log on list print", () => {
    list.print();
    expect(mockLog).toBeCalled();
  });
});
