import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class EcommerceService {
  private products: Product[] = [];
  constructor(private http: HttpClient) {}

  getProductsList() {
    return this.http
      .get<Product[]>(
        'https://casestudy-2c70e-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        tap((res) => {
          this.products = res;
        })
      );
  }

  getProducts() {
    return this.products.slice();
  }

  filter(value: number) {
    switch (value) {
      case 500:
        return this.products.filter((el) => el.price < value);

      case 600:
        return this.products.filter((el) => el.price > 500 && el.price < 1000);

      case 1000:
        return this.products.filter((el) => el.price > value);
    }
  }
}
