import { Component, OnDestroy, OnInit } from '@angular/core';
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

  constructor(private subService: SubjectTimerService) {}

  ngOnInit(): void {
    this.timerSubscription = this.subService.emitNumber.subscribe(
      (num) => (this.timer = num)
    );
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }
}
