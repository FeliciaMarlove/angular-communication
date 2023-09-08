import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as _ from 'lodash';

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
    // the underscore _ is from Lodash https://lodash.com/
    const newValue = _.sample([
      "Started from the Child now I'm in Parent!",
      'Child sent me to Parent',
      'From Child to Parent',
    ]);
    this.fromChildEmitter.emit(newValue);
  }
}
