import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-element',
  templateUrl: './create-element.component.html',
  styleUrls: ['./create-element.component.css'],
})
export class CreateElementComponent implements OnInit {
  @Input() index: number;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    alert(`div ${this.index} is clicked`);
  }
}
