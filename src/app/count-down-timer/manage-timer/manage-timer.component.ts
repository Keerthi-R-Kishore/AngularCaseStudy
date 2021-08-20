import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ClickCount } from '../click.count.model';

@Component({
  selector: 'app-manage-timer',
  templateUrl: './manage-timer.component.html',
  styleUrls: ['./manage-timer.component.css'],
})
export class ManageTimerComponent implements OnInit {
  @Output() emitTimer = new EventEmitter<number>();
  @Output() emitClickCount = new EventEmitter<ClickCount>();
  @Output() timeEmitter = new EventEmitter<string[]>();
  @ViewChild('time', { static: true }) timeSet: ElementRef;
  isPaused = false;
  isResume = false;
  timeFunction: any;
  timerValue: number;
  pausedArr: number[] = [];
  currentTime: string;
  timeArr: string[] = [];
  startClicks: number = 0;
  pauseClicks: number = 0;
  resumeClicks: number = 0;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  startTimer() {
    this.startClicks++;
    this.emitClicks();
    this.timeStampEmitter('start');
    this.timerValue = this.timeSet.nativeElement.value;
    this.isPaused = true;
    this.startTimerInterval();
  }

  pauseTimer() {
    this.pauseClicks++;
    this.emitClicks();
    this.timeStampEmitter('pause');
    clearInterval(this.timeFunction);
    this.isPaused = false;
    this.isResume = true;
    this.pausedArr.push(this.timerValue);
  }

  resumeTimer() {
    this.resumeClicks++;
    this.emitClicks();
    this.timeStampEmitter('resume');
    this.isResume = false;
    this.isPaused = true;
    this.startTimerInterval();
  }

  emitClicks(reset = false) {
    if (!reset) {
      this.emitClickCount.emit(
        new ClickCount(this.startClicks, this.pauseClicks, this.resumeClicks)
      );
    } else {
      this.emitClickCount.emit(null);
    }
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
    this.timeEmitter.emit(this.timeArr);
  }

  startTimerInterval() {
    this.timeFunction = setInterval(() => {
      this.emitTimer.emit(this.timerValue);
      if (this.timerValue === 0) {
        clearInterval(this.timeFunction);
      }
      this.timerValue--;
    }, 1000);
  }

  resetTimer() {
    this.startClicks = 0;
    this.pauseClicks = 0;
    this.resumeClicks = 0;
    this.isPaused = false;
    this.isResume = false;
    this.emitClicks(true);
    this.timeStampEmitter('reset');
    this.pausedArr = [];
    clearInterval(this.timeFunction);
    this.emitTimer.emit(null);
    this.renderer.setProperty(this.timeSet.nativeElement, 'value', '');
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
