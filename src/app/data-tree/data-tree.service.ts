import { Injectable } from '@angular/core';
import { SCRData as Data } from '../SCR';

import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import { Node, LeafNode, Edge } from './data-tree.model';

@Injectable({ providedIn: 'root' })
export class DataTreeService {
  private data = JSON.parse(JSON.stringify(Data));
  private keyDepth: number = 0;
  private parentIds: string[] = [];
  public nodes: Node[] = [];
  private edges: Edge[] = [];

  constructor() {
    this.parseJSONtoTree(this.data, this.keyDepth, this.parentIds); // root node
  }

  groupNodesByDepth() {
    return _.groupBy<Node[]>(this.nodes, 'depth');
  }

  parseJSONtoTree(data: JSON, keyDepth: number, parentIds: string[]) {
    const newId: string = uuidv4().toString();
    Object.entries(data).map(([key, value]) => {
      if (Array.isArray(value)) {
        value.map((item, index) => {
          const newParentIds: string[] = [...parentIds, newId];
          const node: Node = {
            id: newId,
            key: key,
            depth: keyDepth + 1,
            parentIds: parentIds,
            isSelected: false,
            isLeaf: false,
          };
          this.parseJSONtoTree(item, keyDepth + 2, newParentIds);
          // this.nodes.push(node);
        });
      } else if (typeof value === 'object' && !Array.isArray(value)) {
        const newParentIds: string[] = [...parentIds, newId];
        const node: Node = {
          id: newId,
          key: key,
          depth: keyDepth,
          parentIds: parentIds,
          isSelected: false,
          isLeaf: false,
        };
        this.parseJSONtoTree(value, keyDepth + 1, newParentIds);
        this.nodes.push(node);
      } else if (typeof value !== 'object' && !Array.isArray(value)) {
        parentIds = [...new Set([...parentIds, newId])];
        const node: LeafNode = {
          id: newId,
          key: key,
          value: value,
          depth: keyDepth,
          parentIds: parentIds,
          isSelected: false,
          isLeaf: true,
        };
        this.nodes.push(node);
      }
    });

    this.keyDepth++;
    return undefined;
  }

  getNodes(): Node[] {
    return this.nodes;
  }
}
