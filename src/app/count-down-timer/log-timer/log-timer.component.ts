import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-log-timer',
  templateUrl: './log-timer.component.html',
  styleUrls: ['./log-timer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogTimerComponent implements OnInit {
  @Input() timeStamp: string[];

  constructor() {}

  ngOnInit(): void {}
}
