import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { SCRData as Data } from '../SCR';
import { v4 as uuidv4, v4 } from 'uuid';
import _ from 'lodash';

interface Node {
  id: string; // uuid
  key: string;
  value: string | void;
  depth: number;
  parentIds: string[];
  isOnlyChild: boolean;
  isSelected: boolean;
}

interface Edge {
  id: string; // uuid
  source: Node;
  target: Node;
}

@Component({
  selector: 'app-data-tree',
  imports: [],
  templateUrl: './data-tree.component.html',
  styleUrl: './data-tree.component.css',
})
export class DataTreeComponent implements OnInit {
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement> | undefined;

  data = JSON.parse(JSON.stringify(Data));
  keyDepth: number = 0;
  parentIds: string[] = [];
  nodes: Node[] = [];
  edges: Edge[] = [];

  constructor() {
    this.parseJSONtoTree(this.data, this.keyDepth, this.parentIds); // root node
    console.log('GROUP BY DEPTH', _.groupBy<Node[]>(this.nodes, 'depth'));
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  ngAfterViewInit(): void {
    this.draw();
  }

  private draw(): void {
    if (this.canvas) {
      let elmnt = this.canvas.nativeElement;
      let ctx = elmnt.getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, 100, 100);
      }
    }
  }

  parseJSONtoTree(data: JSON, keyDepth: number, parentIds: string[]) {
    console.log('DATA PARSED IN', data);
    Object.entries(data).map(([key, value]) => {
      if (Array.isArray(value)) {
        value.map((item, index) => {
          const newId: string = uuidv4().toString();
          parentIds.push(newId);
          const node: Node = {
            id: newId,
            key: key,
            value: this.parseJSONtoTree(item, keyDepth + 1, parentIds),
            depth: keyDepth,
            parentIds: parentIds,
            isOnlyChild: Object.keys(data).length === 1,
            isSelected: false,
          };
          this.nodes.push(node);
        });
      } else if (typeof value === 'object' && !Array.isArray(value)) {
        console.log('IS OBJECT key:', key, 'value:', value);
        const newId: string = uuidv4().toString();
        parentIds.push(newId);
        const node: Node = {
          id: newId,
          key: key,
          value: this.parseJSONtoTree(value, keyDepth + 1, parentIds),
          depth: keyDepth,
          parentIds: parentIds,
          isOnlyChild: Object.keys(data).length === 1,
          isSelected: false,
        };
        this.nodes.push(node);
      } else if (typeof value !== 'object' && !Array.isArray(value)) {
        console.log('IS VALUE key:', key, 'value:', value);
        const node: Node = {
          id: uuidv4(),
          key: key,
          value: value,
          depth: keyDepth,
          parentIds: parentIds,
          isOnlyChild: Object.keys(data).length === 1,
          isSelected: false,
        };
        this.nodes.push(node);
      }
    });
    this.keyDepth++;
    console.log('NODES', this.nodes);
  }
}
