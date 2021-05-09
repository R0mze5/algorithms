export const breadthFirstSearch = (
  graph: Record<string, Array<string>>,
  start: string,
  end: string
): boolean => {
  let queue = [];

  queue.push(start);

  while (queue.length > 0) {
    const current = queue.shift();

    if (!graph[current]) {
      // eslint-disable-next-line no-param-reassign
      graph[current] = [];
    }

    if (graph[current].includes(end)) {
      return true;
    }
    queue = [...queue, ...graph[current]];
  }

  return false;
};
