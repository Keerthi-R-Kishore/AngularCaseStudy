import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
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

  constructor(
    private ecom: EcommerceService,
    private route: ActivatedRoute,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.onGridView();
    this.route.data.subscribe((param) => {
      this.products = param['products'];
    });
  }

  onListView() {
    this.renderer.addClass(this.productsView.nativeElement, 'list');
    this.renderer.addClass(this.listButton.nativeElement, 'active');
    this.renderer.removeClass(this.gridButton.nativeElement, 'active');
  }

  onGridView() {
    this.renderer.removeClass(this.productsView.nativeElement, 'list');
    this.renderer.removeClass(this.listButton.nativeElement, 'active');
    this.renderer.addClass(this.gridButton.nativeElement, 'active');
  }

  filterProducts(value: number) {
    this.products = this.ecom.filter(value);
  }
}
