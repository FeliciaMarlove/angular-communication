import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  dataFromParent = 'I\'m a value declared in Parent';

  constructor() { }

  ngOnInit() {
  }

}