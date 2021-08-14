import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner.component';

const bannerRoutes: Routes = [
  {
    path: '',
    component: BannerComponent,
  },
];

@NgModule({
  declarations: [BannerComponent],
  imports: [CommonModule, RouterModule.forChild(bannerRoutes)],
  exports: [RouterModule],
})
export class BannerModule {}
