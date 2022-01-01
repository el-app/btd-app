import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from '../model/Category';
import { Product } from '../model/Product';
import { CategoriesService } from '../services/categories.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products: Product[] = [];
  prodSubscription: Subscription = new Subscription;

  categories: Category[] = [];
  catSubscription: Subscription = new Subscription;

  constructor(
    private prodService: ProductsService,
    private catService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.prodSubscription = this.prodService.prodSubject.subscribe(
      (data: any) => {
        this.products = data;
      }
    );
    this.catSubscription = this.catService.catSubject.subscribe(
      (data: any) => {
        this.categories = data;
      }
    )
  }

}
