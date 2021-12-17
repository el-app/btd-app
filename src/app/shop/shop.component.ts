import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../model/Product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products: Product[] = [];
  prodSubscription: Subscription = new Subscription;

  constructor(private prodService: ProductsService) { }

  ngOnInit(): void {
    this.prodSubscription = this.prodService.prodSubject.subscribe(
      (data: any) => {
        this.products = data;
      }
    )
  }

}
