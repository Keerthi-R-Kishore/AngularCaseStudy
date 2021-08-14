import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';

const studentRoutes: Routes = [{ path: '', component: StudentComponent }];

@NgModule({
  declarations: [StudentComponent],
  imports: [CommonModule, RouterModule.forChild(studentRoutes)],
  exports: [RouterModule],
})
export class StudentModule {}
