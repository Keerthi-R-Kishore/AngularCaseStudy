import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectTimerService } from '../subject-timer.service';

@Component({
  selector: 'app-subject-log',
  templateUrl: './subject-log.component.html',
  styleUrls: ['./subject-log.component.css'],
})
export class SubjectLogComponent implements OnInit, OnDestroy {
  timeStamp: string[] = [];
  timeSubs: Subscription;

  constructor(private subSups: SubjectTimerService) {}

  ngOnInit(): void {
    this.timeSubs = this.subSups.emitTime.subscribe((time) => {
      this.timeStamp = time;
    });
  }

  ngOnDestroy() {
    this.timeSubs.unsubscribe();
  }
}
