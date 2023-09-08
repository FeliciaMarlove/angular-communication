import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  dataFromParent = 'I\'m a value declared in Parent';
  receivedFromChild = 'Waiting for a new value from Child';

  constructor() { }

  ngOnInit() {
  }
  
  doSomethingWithIt(valueFromChild: string) {
    this.receivedFromChild = valueFromChild;
  }

}