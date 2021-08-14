import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  ratingArray: number[];

  constructor() {}

  ngOnInit(): void {
    this.ratingArray = Array(this.product.rating).fill(1);
  }
}
