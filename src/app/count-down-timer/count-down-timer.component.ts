import { Component, OnInit } from '@angular/core';
import { ClickCount } from './click.count.model';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.css'],
})
export class CountDownTimerComponent implements OnInit {
  timeRemaining: number;
  timeStamp: string[];
  countClick: ClickCount;

  constructor() {}

  ngOnInit(): void {}

  onTimer(event) {
    this.timeRemaining = event;
  }

  ontimeEmitter(event) {
    this.timeStamp = event;
  }

  onCountClick(event) {
    this.countClick = event;
  }
}
