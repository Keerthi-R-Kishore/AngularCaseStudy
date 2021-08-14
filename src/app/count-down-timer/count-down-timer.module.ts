import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CountDownTimerComponent } from './count-down-timer.component';
import { DisplayTimerComponent } from './display-timer/display-timer.component';
import { LogTimerComponent } from './log-timer/log-timer.component';
import { ManageTimerComponent } from './manage-timer/manage-timer.component';
import { TrackTimerComponent } from './track-timer/track-timer.component';

const countRoutes: Routes = [{ path: '', component: CountDownTimerComponent }];

@NgModule({
  declarations: [
    DisplayTimerComponent,
    LogTimerComponent,
    ManageTimerComponent,
    TrackTimerComponent,
    CountDownTimerComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(countRoutes)],
})
export class CountdownModule {}
