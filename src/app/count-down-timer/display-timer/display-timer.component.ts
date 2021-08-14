import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-timer',
  templateUrl: './display-timer.component.html',
  styleUrls: ['./display-timer.component.css'],
})
export class DisplayTimerComponent implements OnInit {
  @Input() timer: number;

  constructor() {}

  ngOnInit(): void {}
}
