import { ITreeNode } from "@types";

export function recursiveTreeTraversal(tree: Array<ITreeNode>): number {
  let sum = 0;

  tree.forEach((node) => {
    sum += node.v;

    if (Array.isArray(node.c)) {
      sum += recursiveTreeTraversal(node.c);
    }
  });

  return sum;
}
export function iterationTreeTraversal(tree: Array<ITreeNode>): number {
  if (!tree.length) return 0;

  let sum = 0;

  const stack: Array<ITreeNode> = [];

  tree.forEach((node) => stack.push(node));

  while (stack.length) {
    const node = stack.pop();

    sum += node.v;

    if (node.c) {
      node.c.forEach((child) => stack.push(child));
    }
  }

  return sum;
}
