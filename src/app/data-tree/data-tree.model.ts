export interface Node {
  id: string; // uuid
  key: string;
  depth: number;
  parentIds: string[];
  isSelected: boolean;
  isLeaf: boolean;
}

export interface LeafNode extends Node {
  value: string | void;
  isLeaf: boolean;
}

export interface Edge {
  id: string; // uuid
  source: Node;
  target: Node;
}

export interface Dot {
  id: string;
  x: number;
  y: number;
  radius: number;
  startAngle: number;
  endAngle: number;
  counterclockwise: boolean;
  fillColour: string;
}

export interface KeyLabel {
  id: string;
  x: number;
  y: number;
  text: string;
  fillColour: string;
  strokeColour: string;
  font: string;
  fontSize: number;
  maxwidth: number;
}
