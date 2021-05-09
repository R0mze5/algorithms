/* eslint-disable max-classes-per-file */
// the complexity of the algorithm is O (log2n), where n is the number of iteration elements in the array

class TreeNode {
  public value: number;

  public left: null | TreeNode = null;

  public right: null | TreeNode = null;

  constructor(value: number) {
    this.value = value;
  }
}

export class BinaryTreeSearch {
  protected root: null | TreeNode = null;

  add(value: number) {
    if (!this.root) {
      this.root = new TreeNode(value);
    } else {
      let node = this.root;

      const newNode = new TreeNode(value);

      while (node) {
        if (value > node.value) {
          if (!node.right) {
            break;
          }
          node = node.right;
        } else {
          if (!node.left) {
            break;
          }
          node = node.left;
        }
      }

      if (value > node.value) {
        node.right = newNode;
      } else {
        node.left = newNode;
      }
    }
  }

  print(root = this.root) {
    if (!root) return;
    console.log(root.value);
    this.print(root.left);
    this.print(root.right);
  }
}
