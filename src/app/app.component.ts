import { Component, OnInit } from '@angular/core';
import { EcommerceService } from './e-commerce-category/e-commerce.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private ecom: EcommerceService) {}

  ngOnInit() {
    this.ecom.getProductsList();
  }
}
