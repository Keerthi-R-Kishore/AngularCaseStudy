import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ClickCount } from '../count-down-timer/click.count.model';

@Injectable({
  providedIn: 'root',
})
export class SubjectTimerService {
  timeFunction: any;
  emitNumber = new Subject<number>();
  emitTime = new Subject<string[]>();
  emitClicks = new Subject<ClickCount>();
  timeArr: string[] = [];
  currentTime: string;

  startTimerInterval(value: number, clicks: ClickCount) {
    this.emitClicks.next(clicks);
    this.timeFunction = setInterval(() => {
      this.emitNumber.next(value);
      if (value === 0) {
        clearInterval(this.timeFunction);
        // this.emitNumber.next(0);
      }
      value--;
    }, 1000);
  }

  clearTimer(click: ClickCount) {
    this.emitClicks.next(click);
    clearInterval(this.timeFunction);
  }

  resetEmits() {
    this.emitNumber.next(null);
    this.emitTime.next(null);
    this.emitClicks.next(null);
    this.timeArr = [];
    clearInterval(this.timeFunction);
  }

  timeStampEmitter(str: string) {
    this.currentTime = this.dateForamtter(new Date());
    switch (str) {
      case 'start':
        this.timeArr.push(`Started at ${this.currentTime}`);
        break;
      case 'pause':
        this.timeArr.push(`Paused at ${this.currentTime}`);
        break;
      case 'resume':
        this.timeArr.push(`Resumed at ${this.currentTime}`);
        break;
      default:
        this.timeArr = [];
    }
    this.emitTime.next(this.timeArr);
  }

  dateForamtter(date: Date) {
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let time;
    if (hours == 12) {
      time = hours + ':' + min + ' PM';
    } else {
      time =
        hours > 12
          ? hours - 12 + ':' + min + ':' + sec + ' PM'
          : hours + ':' + min + ':' + sec + ' AM';
    }

    return `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()} ${time}`;
  }
}
