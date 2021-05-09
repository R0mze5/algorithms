export function computationCaching<T>(fn: Function): Function {
  const cache: Record<number, T> = {};

  return function computation(n: number): T {
    if (cache[n]) {
      return cache[n];
    }

    const result = fn(n);

    cache[n] = result;

    return result;
  };
}
