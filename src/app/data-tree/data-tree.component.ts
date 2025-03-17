import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { DataTreeService } from './data-tree.service';
import { Node, Dot, KeyLabel } from './data-tree.model';

@Component({
  selector: 'app-data-tree',
  imports: [],
  templateUrl: './data-tree.component.html',
  styleUrl: './data-tree.component.css',
})
export class DataTreeComponent implements OnInit {
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement> | undefined;
  nodeGroups: any = [];
  xStart = 50;
  yStart = 50;
  canvasWidth = 800;
  canvasHeight = 800;
  colWidth = 100;
  rowHeight = 100;

  constructor(private dataService: DataTreeService) {}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.nodeGroups = this.onParseTree();
  }

  ngAfterViewInit(): void {
    this.draw();
  }

  onParseTree() {
    const nodeGroups = this.dataService.groupNodesByDepth();
    console.log('Parsing tree...', nodeGroups);
    return nodeGroups;
  }

  getParentIndex(parentId: string, prevLayer: Node[]): number {
    let parentIndex = -1;
    for (let i = 0; i < prevLayer.length; i++) {
      if (prevLayer[i].id === parentId) {
        parentIndex = i;
        break;
      }
    }
    return parentIndex;
  }

  getXBandWidth(layerLength: number): number {
    return this.canvasWidth / layerLength;
  }

  getXBandWidthStart(parentIndex: number, layerLength: number): number {
    return (this.canvasWidth / layerLength) * (parentIndex + 1);
  }

  drawDot(dot: Dot, ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, dot.radius, dot.startAngle, dot.endAngle);
    ctx.fillStyle = dot.fillColour;
    ctx.fill();
    return;
  }

  drawKeyLabel(keyLabel: KeyLabel, ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.font = `${keyLabel.fontSize} ${keyLabel.font}`;
    ctx.fillStyle = keyLabel.fillColour;
    ctx.fillText(keyLabel.text, keyLabel.x, keyLabel.y, keyLabel.maxwidth);
    return;
  }

  drawLayer(layer: any, ctx: CanvasRenderingContext2D): void {
    layer.forEach((el: any, index: number) => {
      const layerLength = layer.length;
      const newDot: Dot = {
        id: el.id,
        x: this.xStart + this.getXBandWidthStart(index, layerLength),
        y: this.yStart,
        radius: 10, // radius
        startAngle: 0,
        endAngle: 2 * Math.PI, // full circle
        counterclockwise: true,
        fillColour: '#0096FF',
      };
      this.drawDot(newDot, ctx);
      const newKeyLabel: KeyLabel = {
        id: el.id,
        x: this.xStart + this.getXBandWidthStart(index, layerLength),
        y: this.yStart + 20,
        text: el.key,
        fillColour: 'black',
        strokeColour: 'black',
        font: 'Arial',
        fontSize: 12,
        maxwidth: 100,
      };
      this.drawKeyLabel(newKeyLabel, ctx);
    });
  }

  private draw(): void {
    if (this.canvas) {
      let elmnt = this.canvas.nativeElement;
      let ctx = elmnt.getContext('2d');
      if (ctx) {
        const firstLayer = this.nodeGroups[0];
        const secondLayer = this.nodeGroups[1];
        this.drawLayer(firstLayer, ctx);
        this.yStart += 200;
        this.drawLayer(secondLayer, ctx);
      }
    }
  }
}
