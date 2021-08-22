import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
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

  constructor(
    private subSups: SubjectTimerService,
    private cd: ChangeDetectorRef
  ) {
    this.cd.detach();
  }

  ngOnInit(): void {
    this.timeSubs = this.subSups.emitTime.subscribe((time) => {
      this.timeStamp = time;
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    this.timeSubs.unsubscribe();
  }
}
