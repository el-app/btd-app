import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products: Array<string> = [];
  prodSubscription: Subscription = new Subscription;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.prodSubscription = this.productsService.prodSubject.subscribe(
      (data) => {
        this.products = data;
      }
    )
  }

}
