import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';
import { ClickCount } from 'src/app/count-down-timer/click.count.model';
import { SubjectTimerService } from '../subject-timer.service';

@Component({
  selector: 'app-subject-track',
  templateUrl: './subject-track.component.html',
  styleUrls: ['./subject-track.component.css'],
})
export class SubjectTrackComponent implements OnInit, OnDestroy {
  counts: ClickCount;
  clickSubs: Subscription;

  constructor(private subService: SubjectTimerService) {}

  ngOnInit(): void {
    this.clickSubs = this.subService.emitClicks.subscribe((clicks) => {
      this.counts = clicks;
    });
  }

  ngOnDestroy() {
    this.clickSubs.unsubscribe();
  }
}
