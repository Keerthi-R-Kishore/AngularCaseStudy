import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectTimerService } from '../subject-timer.service';

@Component({
  selector: 'app-subject-display',
  templateUrl: './subject-display.component.html',
  styleUrls: ['./subject-display.component.css'],
})
export class SubjectDisplayComponent implements OnInit, OnDestroy {
  timer: number;
  timerSubscription: Subscription;

  constructor(
    private subService: SubjectTimerService,
    private cd: ChangeDetectorRef
  ) {
    this.cd.detach();
  }

  ngOnInit(): void {
    this.timerSubscription = this.subService.emitNumber.subscribe((num) => {
      this.timer = num;
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }
}
