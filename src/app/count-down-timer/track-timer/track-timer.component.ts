import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ClickCount } from '../click.count.model';

@Component({
  selector: 'app-track-timer',
  templateUrl: './track-timer.component.html',
  styleUrls: ['./track-timer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrackTimerComponent implements OnInit {
  @Input() counts: ClickCount;

  constructor() {}

  ngOnInit(): void {}
}
