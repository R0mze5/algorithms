export type TGraphNodeName = string;
export type TGraphNode = Array<TGraphNodeName>;
export type TDijkstraGraphNode = Record<TGraphNodeName, number>;

export interface ITreeNode {
  v: number;
  c?: Array<ITreeNode>;
}
