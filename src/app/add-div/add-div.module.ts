import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDivComponent } from './add-div.component';
import { CreateElementComponent } from './create-element/create-element.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AddDivComponent,
  },
];

@NgModule({
  declarations: [AddDivComponent, CreateElementComponent],
  imports: [CommonModule, RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class AddDivModule {}
