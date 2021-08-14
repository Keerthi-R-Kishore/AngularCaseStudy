import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SubjectDisplayComponent } from './subject-display/subject-display.component';
import { SubjectLogComponent } from './subject-log/subject-log.component';
import { SubjectManageComponent } from './subject-manage/subject-manage.component';
import { SubjectTimerComponent } from './subject-timer.component';
import { SubjectTrackComponent } from './subject-track/subject-track.component';

const subjectRoutes: Routes = [{ path: '', component: SubjectTimerComponent }];

@NgModule({
  declarations: [
    SubjectDisplayComponent,
    SubjectLogComponent,
    SubjectManageComponent,
    SubjectTrackComponent,
    SubjectTimerComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(subjectRoutes)],
  exports: [RouterModule],
})
export class SubjectTimerModule {}
