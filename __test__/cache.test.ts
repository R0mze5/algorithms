import { computationCaching } from "../src/cache/computationCaching";

function getFactorialArray(number: number): Array<number> {
  let n = number;
  const result: Array<number> = [];
  while (n !== 1) {
    result.push(n);

    n -= 1;
  }

  result.push(1);

  result.reverse();
  return result;
}

describe("computation cache", () => {
  it("should compute value", () => {
    const cacheFactorial = computationCaching(getFactorialArray);

    expect(cacheFactorial(3)).toStrictEqual([1, 2, 3]);
  });

  it("without cache should return new value", () => {
    const primaryСomputation = getFactorialArray(3);
    const secondaryСomputation = getFactorialArray(3);

    expect(primaryСomputation).not.toBe(secondaryСomputation);
  });

  it("should cache", () => {
    const cacheFactorial = computationCaching(getFactorialArray);

    const primaryСomputation = cacheFactorial(3);
    const secondaryСomputation = cacheFactorial(3);

    expect(primaryСomputation).toBe(secondaryСomputation);
  });
});
