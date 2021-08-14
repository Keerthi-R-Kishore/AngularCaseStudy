import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { ECommerceCategoryComponent } from './e-commerce-category/e-commerce-category.component';
import { EcommerceResolverService } from './e-commerce-category/e-commerce.resolver';

import { StudentComponent } from './student/student.component';
import { SubjectTimerComponent } from './subject-timer/subject-timer.component';
import { AddDivComponent } from './add-div/add-div.component';

const routes: Routes = [
  { path: '', redirectTo: '/banner', pathMatch: 'full' },
  {
    path: 'banner',
    loadChildren: () =>
      import('./banner/banner.module').then((m) => m.BannerModule),
  },

  {
    path: 'e-commerce',
    loadChildren: () =>
      import('./e-commerce-category/e-commerce-category.module').then(
        (m) => m.EcommerceModule
      ),
  },
  {
    path: 'count-down-timer',
    loadChildren: () =>
      import('./count-down-timer/count-down-timer.module').then(
        (m) => m.CountdownModule
      ),
  },
  {
    path: 'subject-timer',
    loadChildren: () =>
      import('./subject-timer/subject-timer.module').then(
        (m) => m.SubjectTimerModule
      ),
  },
  {
    path: 'student-marks',
    loadChildren: () =>
      import('./student/student.module').then((m) => m.StudentModule),
  },
  {
    path: 'create-element',
    loadChildren: () =>
      import('./add-div/add-div.module').then((m) => m.AddDivModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
