import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { EcommerceService } from './e-commerce.service';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class EcommerceResolverService implements Resolve<Product[]> {
  constructor(private eComService: EcommerceService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Product[] | Observable<Product[]> {
    const products = this.eComService.getProducts();

    if (products.length === 0) {
      return this.eComService.getProductsList();
    } else {
      return products;
    }
  }
}
