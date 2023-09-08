import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() attributeInChild: string = '';
  @Output() fromChildEmitter = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  someMethodChangingTheValue() {
    const newValue =[
      "Started from the Child now I'm in Parent!",
      'Child sent me to Parent',
      'From Child to Parent',
    ][Math.floor(Math.random() * 3)];
    this.fromChildEmitter.emit(newValue);
  }
}
