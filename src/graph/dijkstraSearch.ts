type TGraphNodeName = string;
type TGraphNode = Record<TGraphNodeName, number>;

function findNodeLowestCost(costs: TGraphNode, processed: Array<TGraphNodeName>): TGraphNodeName {
  let lowestCost = Infinity;

  let lowestNode;

  Object.keys(costs).forEach((node) => {
    const cost = costs[node];

    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestNode = node;
    }
  });

  return lowestNode;
}

export const dijkstraSearch = (
  graph: Record<string, TGraphNode>,
  start: string
  // end: string
): Record<string, number> => {
  const costs: TGraphNode = {};
  const processed: Array<TGraphNodeName> = [];
  let neighbors: Record<string, number> = {};

  Object.keys(graph).forEach((node) => {
    if (node !== start) {
      const value = graph[start][node];

      costs[node] = value || Infinity;
    }
  });

  let node = findNodeLowestCost(costs, processed);

  while (node) {
    const cost = costs[node];
    neighbors = graph[node];

    // eslint-disable-next-line no-loop-func
    Object.keys(neighbors).forEach((neighbor) => {
      const newCost = cost + neighbors[neighbor];

      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
      }
    });

    processed.push(node);

    node = findNodeLowestCost(costs, processed);
  }

  return costs;
};
