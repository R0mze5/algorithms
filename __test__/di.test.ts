import { CliOutput, Dog, DogService } from "../src/dataStructures/classes/di";

const mockLog = jest.fn();

beforeEach(() => {
  global.console.log = mockLog;
});

afterAll(() => {
  jest.resetAllMocks();
});

describe("Dependency Injection class", () => {
  it.only("should called", () => {
    const dog = new Dog(new CliOutput());
    const calledString = "bow-wow";
    dog.bark(calledString);

    expect(mockLog).toBeCalledWith(calledString);
  });
});

describe("Dependency Injection Service", () => {
  it.only("should called on initialize", () => {
    const dogService = new DogService();
    dogService.createDog();

    expect(mockLog).toBeCalled();
  });
});
