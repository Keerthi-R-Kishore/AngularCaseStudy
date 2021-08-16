import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcommerceService } from './e-commerce.service';
import { Product } from './product.model';

@Component({
  selector: 'app-e-commerce-category',
  templateUrl: './e-commerce-category.component.html',
  styleUrls: ['./e-commerce-category.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ECommerceCategoryComponent implements OnInit {
  products: Product[] = [];
  listType: boolean = false;
  @ViewChild('productContainer', { static: true }) productsView: ElementRef;
  @ViewChild('gridButton', { static: true }) gridButton: ElementRef;
  @ViewChild('listButton', { static: true }) listButton: ElementRef;

  constructor(private ecom: EcommerceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.onGridView();
    this.route.data.subscribe((param) => {
      this.products = param['products'];
    });
  }

  onListView() {
    this.productsView.nativeElement.classList.add('list');
    this.listButton.nativeElement.classList.add('active');
    this.gridButton.nativeElement.classList.remove('active');
  }

  onGridView() {
    this.productsView.nativeElement.classList.remove('list');
    this.gridButton.nativeElement.classList.add('active');
    this.listButton.nativeElement.classList.remove('active');
  }

  filterProducts(value: number) {
    this.products = this.ecom.filter(value);
  }
}
