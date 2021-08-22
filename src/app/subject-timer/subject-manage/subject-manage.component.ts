import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ClickCount } from 'src/app/count-down-timer/click.count.model';
import { SubjectTimerService } from '../subject-timer.service';

@Component({
  selector: 'app-subject-manage',
  templateUrl: './subject-manage.component.html',
  styleUrls: ['./subject-manage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubjectManageComponent implements OnInit, OnDestroy {
  @ViewChild('timer', { static: true }) timerSet: ElementRef;
  timeRemaining: number;
  countFromSubject: number;
  timerSubs: Subscription;
  pausedArr = [];
  isPaused = false;
  isResume = false;
  startClicks: number = 0;
  pauseClicks: number = 0;
  resumeClicks: number = 0;

  constructor(
    private subjectService: SubjectTimerService,
    private renderer: Renderer2,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.timerSubs = this.subjectService.emitNumber.subscribe((num) => {
      if (num === 0) {
        this.pausedArr = [];
        this.isResume = false;
        this.isPaused = false;
        this.cd.detectChanges();
      }
      this.countFromSubject = num;
    });
  }

  startTimer() {
    this.startClicks++;
    this.isPaused = true;
    this.subjectService.timeStampEmitter('start');
    this.timeRemaining = +this.timerSet.nativeElement.value;
    this.subjectService.startTimerInterval(
      this.timeRemaining,
      new ClickCount(this.startClicks, this.pauseClicks, this.resumeClicks)
    );
  }

  pauseTimer() {
    this.pauseClicks++;
    this.isPaused = false;
    this.isResume = true;
    this.subjectService.timeStampEmitter('pause');
    this.subjectService.clearTimer(
      new ClickCount(this.startClicks, this.pauseClicks, this.resumeClicks)
    );
    this.pausedArr.push(this.countFromSubject);
    console.log(this.pausedArr);
  }

  resumeTimer() {
    this.resumeClicks++;
    this.isResume = false;
    this.isPaused = true;
    this.subjectService.timeStampEmitter('resume');
    this.subjectService.startTimerInterval(
      this.countFromSubject,
      new ClickCount(this.startClicks, this.pauseClicks, this.resumeClicks)
    );
  }

  resetTimer() {
    this.renderer.setProperty(this.timerSet.nativeElement, 'value', '');
    this.isPaused = false;
    this.isResume = false;
    this.startClicks = 0;
    this.pauseClicks = 0;
    this.resumeClicks = 0;
    this.pausedArr = [];
    this.subjectService.resetEmits();
  }

  ngOnDestroy() {
    this.timerSubs.unsubscribe();
  }
}
