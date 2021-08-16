import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownDirective } from '../dropdown.directive';
import { ECommerceCategoryComponent } from './e-commerce-category.component';
import { EcommerceResolverService } from './e-commerce.resolver';
import { ProductComponent } from './product/product.component';

const eCommerce: Routes = [
  {
    path: '',
    component: ECommerceCategoryComponent,
    resolve: { products: EcommerceResolverService },
  },
];

@NgModule({
  declarations: [ProductComponent, ECommerceCategoryComponent, DropdownDirective],
  imports: [CommonModule, RouterModule.forChild(eCommerce)],
  exports: [RouterModule],
})
export class EcommerceModule {}
